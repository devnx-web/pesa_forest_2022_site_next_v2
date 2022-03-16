import Header from "../../components/header";
import Banner from "./banner";
import React from "react";
import Headermob from "../../components/headermob";
import Sobre from "./sobre";
import Footer from "../../components/footer";
import Footercop from "../../components/footercop";
import Mobile from "./mobile";
import Formulario from "../../components/contatoForm.js";
import {Form} from "reactstrap";
import Destaques from "./destaques";


export default function Sobrenos() {
    return (
        <div>
            <div>

                <div className={'ocultamob'}>
                    <Banner/>
                    <Sobre/>
                    <Destaques/>
                    <div style={{
                        backgroundColor: '#DBDBDB',
                        paddingTop: 20,
                        paddingBottom: 50,
                    }}>
                    <Formulario/>
                    </div>
                </div>
                <div className={'ocultadesk'}>
                    <Mobile/>
                </div>

            </div>
        </div>
    )
}
