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
                    <h1 className={'ttmaq2'}>5F GT</h1>
                    <h1 className={'ttmaq1'}>5F GT</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/5f-gt-transparente.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                O Logset 5F GT é um forwarder versátil e compacto. é extremamentevbem adaptado para operações de desbaste, mas também pode ser usado para operações menores de corte raso. Trata-se de um forwarder de 12 toneladas com motor econômico, projetado para transportar cargas máximas. Os grandes pneus de 26,5” e a grande distância ao solo tornam esta máquina a escolha certa para vários tipos de terreno.

                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
