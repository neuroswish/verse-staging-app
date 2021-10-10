import Head from 'next/head'
import Link from 'next/link'
import NextNProgress from 'nextjs-progressbar'

import React, { ReactNode } from 'react'
import type { ReactElement } from "react";

import Header from './Header'


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
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

