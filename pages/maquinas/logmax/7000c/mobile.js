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
                    <h1 className={'ttmaq2'}>7000 C</h1>
                    <h1 className={'ttmaq1'}>7000 C</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/7000c.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                É fabricado com uma estrutura robusta e tem um excelente desempenho para troncos pesados e muito ramificados.

Log Max 7000C combina alto potencial de tração com velocidade de alimentação rápida e é um dos nossos cabeçotes mais populares.<br/>
Temos no 7000C duas opções para a tração.
A versão com redutor proporciona 41,7KN de força a uma velocidade de 3,9m/s, ideal para florestas mais densas e arvores mais pesadas.
A versão sem o redutor proporciona 35,9KNde força a uma velocidade de 5,3 m/s. Estas opções garantem melhor consumo de acordo com a floresta utilizada. 
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
