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
                    <h1 className={'ttmaq2'}>5HP GT</h1>
                    <h1 className={'ttmaq1'}>5HP GT</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/5hp-gt.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                O Logset 5HP GT é o menor harvester da linha Logset. O  tamanho compacto combinado com o poderoso motor torna o harvester versátil, mesmo sendo projetado principalmente para operações de desbaste. O equipamento  é fácil de manobrar e gira sem esforço. As rodas de 34 polegadas na parte traseira permitem que a máquina opere em vários tipos de terreno.
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
