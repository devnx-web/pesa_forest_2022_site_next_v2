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
                    <h1 className={'ttmaq2'}>6000 V</h1>
                    <h1 className={'ttmaq1'}>6000 V</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/6000v.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    O  campeão de vendas 6000B foi melhorado ainda mais para atender às demandas do mercado.
Com o objetivo de sempre fornecer os melhores produtos, nós continuamente desenvolvemos nossos
cabeçotes. Nossa filosofia é trabalhar junto ao cliente para que possamos entender as demandas no setor
florestal e com isso podermos implementar aos nossos produtos as melhorias que tornarão o processo de
colheita mais suave, com menos hora de máquina parada, e muita produtividade..  
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
