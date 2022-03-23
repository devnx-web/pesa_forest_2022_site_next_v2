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
                    <h1 className={'ttmaq2'}>4F GT</h1>
                    <h1 className={'ttmaq1'}>4F GT</h1>
                    <div>
                        <p className={'textomob'}>
                        É o menor Forwarder  do portifólio Logset . A máquina tem capacidade de 10 toneladas de carga e é especialmente concebida para operações de desbaste em florestas densas.
exerce a menor pressão sob o solo em todos os tipos de terreno, causando mínimos danos ao mesmo. 

                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/4f-gt-transparente.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    Lorem ipsum dolor sit amet. Aut galisum nihil qui iusto consectetur ea eligendi blanditiis. Et dolor officiis sed esse omnis sit sapiente voluptates aut voluptate sequi sed molestiae esse vel magni odio.

                    Qui quia minus et porro blanditiis et adipisci praesentium. Qui dolorum quia sed odit deleniti sit reiciendis magnam in sunt nesciunt ut odit enim ut dolorem iure vel praesentium voluptatem.
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
