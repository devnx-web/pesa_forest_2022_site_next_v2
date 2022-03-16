

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React from "react";
import Banner from './banner'
import Pagemeio from "./pagemeio";
import Maqdestaque from "./maqdestaque";


export default function Maquinas() {
    return (
        <div>
            <div>

                <Banner/>
                <Pagemeio/>
                <Maqdestaque/>

            </div>
        </div>
    )
}
