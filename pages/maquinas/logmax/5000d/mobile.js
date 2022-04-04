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
                    <h1 className={'ttmaq2'}>5000 D</h1>
                    <h1 className={'ttmaq1'}>5000 D</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/5000d.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Log Max 5000D
é o cabeçote ideal para desbastes pequenos e médios. Seu consagrado projeto para aplicação multimarcas permitem a aplicação perfeita em vários tipos e marcas de máquinas base. O peso reduzido é um fator essencial do projeto para proporcionar robustez e durabilidade.
<br/>Um Cabeçote versátil e eficiente em operações florestais de desbaste, abrange uma grande gama de aplicações com baixo peso e alta produtividade.   
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
