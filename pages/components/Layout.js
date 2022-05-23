import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { useState } from 'react'
import Script from 'next/script'

export default function Layout({ children }) {
    return (
        <>
        <Script id="GTM-WCK92HL"/>
            <Head>
                <title>Pesa Forest</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}