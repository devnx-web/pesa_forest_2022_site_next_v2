import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";


export default function Mobile(){
    return(
        <div>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>PSM 20</h1>
                    <h1 className={'ttmaq1'}>PSM 20</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/ptl20.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    PESA TRACK LOADER PTL 20 é uma máquina fabricada
                    no Brasil e projetada para atender o mercado orestal,
                    possui lança reta de 5680mm e braço de 2900mm
                    para uma maior performance no carregamento. Fabricada para se sobressair em aplicações orestais,
                    a PTL 20 apresenta potência otimizada e sistemas para
                    máxima produção.
                    A construção reforçada é evidente de ponta a ponta
                    para garantir uma longa vida útil e segurança do
                    operador.
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
