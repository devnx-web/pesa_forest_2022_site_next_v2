import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../../components/header.module.css";


export default function Mobile(){
    return(
        <div>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>8H GT</h1>
                    <h1 className={'ttmaq1'}>8H GT</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/maquina-8h-transparente.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    A Logset 8H GT é uma ceifeira potente e ágil que roda facilmente. É
                    ligeiramente mais curta e mais leve que o modelo de ceifeira de oito rodas
                    Logset 8H GTE. A Logset 8H GT se adequa a operações de desbaste, no
                    entanto, trabalha melhor em cortes de médio e grande tamanho. Este
                    modelo de ceifeira tem uma sólida reputação devido a uma produtividade e
                    a economia de combustível imbatível. O potente motor de 7,4 litros
                    AGCO Power, com 214 kW (291 hp), combinado com a grua Mesera 240H, é
                    a máquina perfeita para desafiar operações de abate.
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
