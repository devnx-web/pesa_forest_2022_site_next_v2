

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'
import Header from "../../../../components/header";
import Banner from "./banner";
import React from "react";
import Headermob from "../../../../components/headermob";
import Sobre from "./sobre";
import Footer from "../../../../components/footer";
import Footercop from "../../../../components/footercop";
import Mobile from "../5hpgt/mobile";


export default function gt5hp
    () {
    return (
        <div>
            <div>
                 
                <div className={'ocultamob'}>
                    <Banner/>
                    <Sobre/>
                </div>
                <div className={'ocultadesk'}>
                    <Mobile/>
                </div>
                 
            </div>
        </div>
    )
}
