

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'
import Banner from "./banner";
import React from "react";
import Sobre from "./sobre";
import Mobile from "../ptl20/mobile";


export default function ptl20() {
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
