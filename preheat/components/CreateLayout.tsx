import Head from 'next/head'
import Link from 'next/link'
import NextNProgress from 'nextjs-progressbar'

import React, { ReactNode } from 'react'
import type { ReactElement } from "react";

import Header from './Header'
import styles from "../styles/components/CreateLayout.module.scss"; // Component styles


export default function CreateLayout({children}: {children: any}) {
  return (
    <div>
      <NextNProgress
        color="#E7347A"
        startPosition={0.3}
        stopDelayMs={200}
        options={{
          showSpinner: false
        }}
      />
      <Header />
      <div className={`${styles.layout__content}`}>
        <div className={`${styles.layout__content_sizer}`}>{children}</div>
      </div>
    </div>
  )
}

