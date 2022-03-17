import Header from "../../../components/header";
import Banner from './banner'
import React from "react";
import Headermob from "../../../components/Headermob";
import Sobre from "./sobre";
import Footer from "../../../components/Footer";
import Mobile from "../4fgt/mobile";


export default function gt4f() {
    return (
        <div>
            <div>

                <div className={'ocultamob'}>
                    <Header />
                    <Banner />
                    <Sobre />
                    <Footer />
                </div>
                <div className={'ocultadesk'}>
                    <Headermob />
                    <Mobile />
                </div>
            </div>
        </div>
    )
}
