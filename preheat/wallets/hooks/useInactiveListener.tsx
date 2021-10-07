/*
 * Thanks Uniswap ❤️🦄
 * https://github.com/Uniswap/uniswap-interface/blob/main/src/hooks/web3.ts
 */

import { useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3ConfigurationContext } from "../config";

// this is basically to look for any account or chain changes.
export function useInactiveListener(suppress = false) {

  // we get context from these two hooks
  const { active, error, activate } = useWeb3React();
  const { connectors } = useContext(Web3ConfigurationContext);

  useEffect(() => {
    if (!connectors || !("ethereum" in window)) {
      return;
    }
    // @ts-ignore
    const ethereum = window.ethereum;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        activate(connectors.injectedConnector, undefined, true).catch(
          (error) => {
            console.error("Failed to activate after chain changed", error);
          }
        );
      };

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(connectors.injectedConnector, undefined, true).catch(
            (error) => {
              console.error("Failed to activate after accounts changed", error);
            }
          );
        }
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    } else {
      return undefined;
    }
  }, [active, error, suppress, activate, connectors]);
}