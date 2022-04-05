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
                    <h1 className={'ttmaq2'}>8H GTE</h1>
                    <h1 className={'ttmaq1'}>8H GTE</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/8h-gte-black-transparente.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                O Logset 8H GTE é um harvester 8x8 ágil e potente, que gira com muita facilidade. É adequado para operações de desbaste, mas tem um desempenho ainda melhor em corte raso, de médio e grande porte, principalmente em terrenos acidentados.

                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_8H GTE_BLACK_EN_V.1.0.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
