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
                    <h1 className={'ttmaq2'}>8HGTEHybrid</h1>
                    <h1 className={'ttmaq1'}>8H GTE Hybrid</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/maquina-8h-gte-hybrid-transparente.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                O Logset 8H GTE Hybrid é um poderoso harvester de tamanho médio. O motor diesel funciona a um ritmo constante, enquanto o sistema híbrido fornece até 104 kW (142 hp) de potência adicional, necessária em um típico ciclo de corte e processamento. Isso permite ao harverster executar facilmente várias tarefas ao mesmo tempo, mantendo a carga  constante do motor.

                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
