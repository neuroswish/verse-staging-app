import type { NextPage } from 'next'
import * as React from "react";
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

// components
import Menu from "./Menu"
import ConnectWallet from './ConnectWallet'

// wallet imports - useWeb3React gets global active context
import { useWalletButton } from '../wallets/hooks/useWalletButton'
import { useWeb3Wallet } from '../wallets/hooks/useWeb3Wallets'

function Header() {
  const router = useRouter()
  const { active, buttonAction, actionText, connectedInfo } = useWalletButton();
  return (
    <div className="w-full z-10 flex flex-row items-center justify-between px-10 py-7 top-0 left-0 right-0 sticky">
      <h2 className="font-bold text-2xl">Verse</h2>
      <div className="flex flex-row items-center justify-end space-x-4">
        <ConnectWallet />
        {active && router.pathname == "/" ? 
          <Link href="/create" passHref>
            <button className="px-8 py-2 bg-black rounded-md font-semibold text-white">Create</button>
          </Link> :
          <></>
        }
      </div>
    </div>
    
  )
}

export default Header
