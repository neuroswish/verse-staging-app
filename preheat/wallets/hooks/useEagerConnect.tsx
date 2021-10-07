import { useCallback, useContext, useEffect, useState } from "react";
// lets us access context variables
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { isMobile } from "react-device-detect";
// importing our global web3 context 
import { Web3ConfigurationContext } from "../config";
import { isClientSide } from "../constants";
import { fetchLastConnectorType } from "../connectors";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// this function is going to let us eagerly connect to the last wallet I believe
export function useEagerConnect() {
  // access web3react contexts
  const { activate, active } = useWeb3React();
  // access our connectors
  const { connectors } = useContext(Web3ConfigurationContext);
  // boolean representing whether we've tried to connect
  const [tried, setTried] = useState(false);

  // attempt eager connection to injected provider
  const attemptEagerInjected = useCallback(async () => {
    if (!connectors) {
      return;
    }
    const isAuthorized = await connectors.injectedConnector.isAuthorized();
    if (isAuthorized) {
      activate(connectors.injectedConnector, undefined, true).catch(() => {
        setTried(true);
      });
    } else {
      // @ts-ignore
      if (isMobile && window.ethereum) {
        activate(connectors.injectedConnector, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    }
  }, [activate]);

  // attempt eager connection to default connector, will pass same function back to child component as long as activate hasn't changed
  const attemptEagerDefault = useCallback(
    (connector: AbstractConnector) => {
      return activate(connector, undefined, true).catch(() => {
        setTried(true);
      });
    },
    [activate]
  );

  // this basically combines the above 2 functions, will pass 
  const attemptEager = useCallback(
    (connector: AbstractConnector) => {
      if (connector instanceof InjectedConnector) {
        return attemptEagerInjected();
      }

      return attemptEagerDefault(connector);
    },
    [attemptEagerDefault, attemptEagerInjected]
  );

  // this will run the first time the component re-renders when any of the values are changed
  useEffect(() => {
    if (!isClientSide || tried || !connectors) {
      return;
    }

    delay(500).then(() => {
      const connector = fetchLastConnectorType(connectors);
      if (connector) {
        attemptEager(connector).catch(() => setTried(true));
      }
    });
    setTried(true);
  }, [activate, attemptEager, tried]);

  // updates tried state if tried to connect
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}