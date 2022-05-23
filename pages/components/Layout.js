import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { useState } from 'react'
import Script from 'next/script'

export default function Layout({ children }) {
    return (
        <>
            <Head>
            <Script src="https://www.googletagmanager.com/ns.html?id=GTM-WCK92HL"
height="0" width="0" style="display:none;visibility:hidden" />
                
                <title>Pesa Forest</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}