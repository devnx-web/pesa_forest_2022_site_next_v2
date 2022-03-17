import Banner from './banner'
import React from "react";
import Headermob from "../components/Headermob";
import Sobre from "./sobre";
import Formulario from "../components/contatoForm";
import Destaques from "./destaques";


export default function Sobrenos() {
    return (
        <div>
            <Banner />
            <Sobre />
            <Destaques />
            <div style={{
                backgroundColor: '#DBDBDB',
                paddingTop: 20,
                paddingBottom: 50,
            }}>
                <Formulario />
            </div>
        </div>
    )
}
