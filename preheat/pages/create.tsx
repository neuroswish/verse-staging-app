import type { NextPage } from 'next'
import { ReactElement, useState, useEffect } from "react"; // Types
import * as React from "react";
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'
import CreateLayout from '../components/CreateLayout'
import Card from '../components/Card'
import Breadcrumb from '../components/Breadcrumb'

import { MarketInput, TokenInput } from "../components/Inputs";

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
  const [marketSymbol, setMarketSymbol] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <CreateLayout>
      <Breadcrumb
        title="Create a new market"
        lastRoute={{
          path: '/',
          name: "Home"
        }}
      />
          <Card title="Create a new market">
            <MarketInput
              title="NAME"
              placeholder="Enter market name"
              value={marketName}
              onChangeHandler={setMarketName}
            />
            <MarketInput
              title="SYMBOL"
              placeholder="Enter market symbol"
              value={marketSymbol}
              onChangeHandler={setMarketSymbol}
            />
            <button className="px-8 py-2 bg-black rounded-md font-semibold text-white">Next</button>
          </Card>
      </CreateLayout>
    </div>
  );
}