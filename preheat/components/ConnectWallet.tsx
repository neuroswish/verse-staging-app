import type { NextPage } from 'next'
import type { ReactElement, useEffect } from "react"; // Types
import * as React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// wallet imports - useWeb3React gets global active context
import { useWalletButton } from '../wallets/hooks/useWalletButton'
import { useWeb3Wallet } from '../wallets/hooks/useWeb3Wallets'

export default function ConnectWallet() {
  const { buttonAction, actionText, connectedInfo } = useWalletButton();

  return (
      <button className="px-8 py-2 bg-black rounded-md font-semibold text-white" onClick={() => buttonAction()}>
        {connectedInfo === undefined ? "Connect Wallet" : connectedInfo}
      </button>
  )
}

