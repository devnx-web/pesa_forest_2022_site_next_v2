import React from "react";
import Banner from './banner'
import Formulario from "./formulario.tsx";
import Header from '../components/header';
import Headermob from "../components/headermob";
import Footer from '../components/Footer';
import Footercop from "../components/footercop";


export default function Contato() {
    return (
        <div>
            <div>
                <Header/>
                <Banner/>
                <Formulario/>
                <Footer/>
                <Footercop/>

            </div>
        </div>
    )
}
