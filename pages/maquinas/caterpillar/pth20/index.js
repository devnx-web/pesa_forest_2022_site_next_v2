import Header from "../../../components/header";
import Banner from './banner'
import React from "react";
import Headermob from "../../../components/Headermob";
import Sobre from "./sobre";
import Footer from "../../../components/Footer";
import Mobile from "../pth20/mobile";


export default function pth20() {
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
