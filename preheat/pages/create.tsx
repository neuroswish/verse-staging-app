import type { NextPage } from 'next'
import { ReactElement, useState, useEffect } from "react"; // Types
import * as React from "react";
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'
import CreateLayout from '../components/CreateLayout'

import { MarketNameInput, MarketSymbolInput, TokenInput } from "../components/Inputs";

// wallet imports - useWeb3React gets global active context
import { useWalletButton } from '../wallets/hooks/useWalletButton'
import { useWeb3Wallet } from '../wallets/hooks/useWeb3Wallets'

import Header from '../components/Header'
import { useRouter } from 'next/router';

/**
 * Returns home page
 * @returns {ReactElement}
 */

export default function Create() {
  const [marketName, setMarketName] = useState("");
  const [marketToken, setMarketToken] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <main className="bg-backgroundLightAlternate min-h-screen w-full bg-contain relative">
      <Header />
      <CreateLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-3xl w-96 h-72 shadow-createShallow rounded-xl bg-white py-6 px-6">
          <MarketNameInput
            title="Market name"
            placeholder="FlowerParty"
            value={marketName}
            onChangeHandler={setMarketName}
          />
        </div>
      </div>
      </CreateLayout>
    </main>
  );
}