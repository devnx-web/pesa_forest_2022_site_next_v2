import React from "react";
import Banner from './banner'
import Formulario from "./formulario";
import Header from '../components/header';
import Footer from '../components/Footer';
import Footercop from "../components/footercop";


export default function Contato() {
    return (
        <div>
            <div>
                <Header />
                <Banner />
                <Formulario />
                <Footer />
                <Footercop />

            </div>
        </div>
    )
}
