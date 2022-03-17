

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'
import Banner from "./banner";
import React from "react";
import Sobre from "./sobre";
import Mobile from "../ptl20/mobile";
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import Headermob from '../../../components/headermob';
import Footercop from '../../../components/footercop';


export default function ptl20() {
    return (
        <div>
            <div>
                <div className={'ocultamob'}>
                    <Header/>
                    <Banner/>
                    <Sobre/>
                    <Footer/>
                    <Footercop/>
                </div>
                <div className={'ocultadesk'}>
                    <Headermob/>
                    <Mobile/>
                </div>
            </div>
        </div>
    )
}
