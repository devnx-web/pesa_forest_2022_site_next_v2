import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";


export default function Mobile(){
    return(
        <div calssName={'ocultadesk'}>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>12HGTEHybrid</h1>
                    <h1 className={'ttmaq1'}>12H GTE Hybrid</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/12gte-hybrid.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Logset12H GTE Hybrid – É o harvester mais produtivo do mundo. É um verdadeiro gigante para a colheita lucrativa em larga escala. Este gigante amigável tem tudo: tecnologia híbrida revolucionária, sistema hidráulico de circuito duplo, grua  forte, transmissão robusta,  estabilidade, confiabilidade e conforto em um grande pacote.

                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_12H GTE Hybrid_EN.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
