import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";


export default function Mobile(){
    return(
        <div className={'ocultadesk'}>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>E6</h1>
                    <h1 className={'ttmaq1'}>E6</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/e6.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Desenvolvido para cumprir os mais altos requisitos quanto ao descasque do eucalipto. Utilizando cinco facas de desgalhamento especialmente projetadas, e rolos especiais para descascar madeira.
                                        <br/>
                                        Para aumentar ainda mais a estabilidade e durabilidade, trazemos o Log Max E6 com o Heavy Duty Kit (HD Kit). É um conjunto de reforços e proteções que vêm da fábrica para proteger as partes vitais do cabeçote quando operado em ambientes de colheita mais agressivos, além de permitir seu uso em condições extremas sem surpresas.     
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
