import Banner from './banner'
import React from "react";
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
                
                paddingBottom: 50,
            }}>
                <Formulario />
            </div>
        </div>
    )
}
