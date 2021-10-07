import { ethers } from "ethers";
// import ABI_D96Ff9 from "./abi/PartyBidFactory.json";
// import ABI_D79d06 from "./abi/0xD79d06B8Efa06a8C1C65dbCaAd28F5e9E542f029.json";

const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

export interface NetworkAddresses {
  marketFactory: { address: string; abi: any };
}
const ADDRESSES: {
  mainnet: NetworkAddresses;
  rinkeby: NetworkAddresses;
} = {
  mainnet: {
    // order matters - most recent factory is first
    marketFactory: 
      {
        address: "0xdb355da657A3795bD6Faa9b63915cEDbE4fAdb00",
        abi: "ABI_D79d06"
      },
  },
  rinkeby: {
    // order matters - most recent factory is first
    marketFactory: 
      {
        address: "0xD79d06B8Efa06a8C1C65dbCaAd28F5e9E542f029",
        abi: "ABI_D79d06"
      },
  }
};

const SUBGRAPH_ENDPOINTS = {
  mainnet: {
    verse: "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1",
  },
  rinkeby: {
    verse: "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1-rinkeby",
  }
};

export const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";
// const ADDRESSES_BY_NETWORK: NetworkAddresses = ADDRESSES[NETWORK];
// const SUBGRAPHS_BY_NETWORK = SUBGRAPH_ENDPOINTS[NETWORK];

const PROVIDER = new ethers.providers.JsonRpcProvider(
  `https://eth-${NETWORK}.alchemyapi.io/v2/GyynPIOntTSrbetTsHOj5KtGb5Zp5GyI`,
  //"ws://135.181.79.223/ws",
  NETWORK === "mainnet" ? 1 : 4
);


const MODAL_STATES = Object.freeze({
  START: "start",
  ADD_ETH: "add"
});

const PARTY_STATUS = Object.freeze({
  ACTIVE: 0,
  WON: 1,
  LOST: 2
});

export {
  NETWORK,
  PROVIDER,
  MODAL_STATES,
  PARTY_STATUS,
  // ADDRESSES_BY_NETWORK,
  // SUBGRAPHS_BY_NETWORK,

};
