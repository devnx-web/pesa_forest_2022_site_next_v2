

import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../../styles/Home.module.css'
import React from "react";
import Banner from './banner'
import Pagemeio from "./pagemeio";
import Maqdestaque from "./maqdestaque";
import Header from '../components/header';
import Footer from '../components/Footer';
import Footercop from '../components/footercop';


export default function Maquinas() {
    return (
        <div>
            <div>
                <Header/>
                <Banner/>
                <Pagemeio/>
                <Maqdestaque/>
                <Footer/>
                <Footercop/>
            </div>
        </div>
    )
}
