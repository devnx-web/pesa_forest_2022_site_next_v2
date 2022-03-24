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
                    <h1 className={'ttmaq2'}>PTH 25</h1>
                    <h1 className={'ttmaq1'}>PTH 25</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/pth20-harvester.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    Lança e braço com projeto e fabricação Pesa, para operação harvester, garantindo a estabilidade e melhor controle, também com a diminuição do
                    peso do conjunto. As tubulações hidráulicas são protegidas, evitando os acidentes causados por batidas em árvores, aumentando a durabilidade
                    dos componentes.                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}