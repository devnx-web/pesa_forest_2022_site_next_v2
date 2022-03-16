

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'
import Sobre from "./sobre";
import Mobile from "./mobile";


export default function Pth18() {
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
