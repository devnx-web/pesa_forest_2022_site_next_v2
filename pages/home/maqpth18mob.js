import {Col, Container} from 'reactstrap'
import css from "./maqpth18.module.css";
import React from "react";
import Image from "next/image";
import Detalhesmaquinamobile from "../../components/detalhesmaquinamobile";
import Link from "next/link"

export default function Maqpth18mob(){

    return(
        <div className={css.bgpage} style={{paddingTop: 40, paddingBottom: 40,}}>
            <Container>
                <div>
                    <h2 className={css.ttmaq2}>PTH 18</h2>
                    <h2 className={css.ttmaq1}>PTH 18</h2>
                        <div>
                            <p className={css.textomaq}>
                                PESA TRACKER HARVESTER PTH-18 é uma máquina projetada para atender o Mercado Florestal, possui um cabeçote que processa as árvores individualmente, ou seja, cada árvore é derrubada, desgalhada, destopada e traçada separadamente. É um equipamento que permite o trabalho de colheita até o 3º trilho na floresta e com alcance de até 8,4 metros, com total agilidade e segurança, ganhando maior mobilidade na floresta.
                            </p>
                        </div>
                        <Link href="/maquina/maquina_pth18"><a><div className={css.botaosaber}>
                            SABER MAIS
                        </div></a></Link>
                    <div className={'pt-4'}>
                        <Image src="/pth18.png" alt="logo" width={400} height={280} />
                    </div>
                </div>
                <div style={{marginTop: -60}}>
                    <Detalhesmaquinamobile/>
                </div>
            </Container>
        </div>
    )

}
