import type { NextPage } from 'next'
import * as React from "react";
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// components
import Menu from "./Menu"
import ConnectWallet from './ConnectWallet'

// wallet imports - useWeb3React gets global active context
import { useWalletButton } from '../wallets/hooks/useWalletButton'
import { useWeb3Wallet } from '../wallets/hooks/useWeb3Wallets'



function Header() {

  return (
    <div className="w-full z-10 flex flex-row items-center justify-between px-5 py-7 top-0 left-0 right-0 sticky">
      <h2>Verse</h2>
      <div className="flex flex-row items-center justify-end">
        <ConnectWallet />
      </div>
    </div>
    
  )
}

export default Header
