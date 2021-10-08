// so essentially, this provider const is a wrapper which is supplying the values to set up the Web3ConfigurationContext from the config file
import { Web3ConfigurationContext } from "../config";
// for metamask
import { InjectedConnector } from "@web3-react/injected-connector";
// for wallet connect
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Fragment, ReactNode, useMemo, useState } from "react";
// theme stuff
import { Theme, Strings } from "../constants";
// modal stuff
import { WalletModalOpenContext } from "./WalletModalOpenContext";
import { ConnectWalletModal } from "../wallet/ConnectWalletModal";
// Web3ReactProvider requires a single getLibrary prop which instantiates a web3 convenience library object
import { Web3ReactProvider } from "@web3-react/core";
import { getLibraryByNetwork } from "../utils/getLibrary";
import Web3ReactManager from "./Web3ReactManager";

// this syntax is for es6 prop destructuring
export const Web3ConfigProvider = ({
  rpcUrl,
  networkId,
  children,
  theme = {},
  strings = {},
}: {
  theme?: Partial<typeof Theme>; // constructs a type with all properties of Theme set to optional
  strings?: Partial<typeof Strings>;
  rpcUrl?: string;
  networkId: number;
  children: ReactNode; // a light, stateless, virtual representation of a DOM node
}) => {
  // create new Injected Connector object
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [networkId],
  });

  // create new wallet connector object
  const walletConnectConnector = rpcUrl
    ? new WalletConnectConnector({
        rpc: { [networkId]: rpcUrl },
        qrcode: true,
      })
    : undefined;
  
  // create a config object with the necessary parameters
  const config = {
    networkId: networkId,
    rpcUrl: rpcUrl,
    connectors: {
      injectedConnector,
      walletConnectConnector,
    },
    theme: Object.assign({}, Theme, theme), // define the theme based on the partial components we passed in
    strings: Object.assign({}, Strings, strings), // define the strings based on the partial components we passed in
  };

  // create state for managing modal
  const [openModalName, setOpenModalName] = useState<string | null>(null);
  // use memoize to get the we3 library we are using 
  const getLibrary = useMemo(() => getLibraryByNetwork(networkId), [networkId]);

  return (
    // return the modal open context provider value so we know the prop value of the modal opening
    // we use this value and set it to the state, and we also can use the setState function to change this value up the prop tree

    // within this wrapping we have our web3 react provider with its necessary config
    // within this we have our web 3 react manager, which manages connection changes

    // within this, we have our connect wallet modal 
    // ConnectWalletModal reads from ModalActionLayout, which reads from useWalletModalState, which reads from WalletModalOpenContext, which is the top level component here
    <WalletModalOpenContext.Provider
      value={{ openModalName, setOpenModalName }}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ConfigurationContext.Provider value={config}>
          <Web3ReactManager>
            <Fragment>
              <ConnectWalletModal />
              {children}
            </Fragment>
          </Web3ReactManager>
        </Web3ConfigurationContext.Provider>
      </Web3ReactProvider>
    </WalletModalOpenContext.Provider>
  );
};