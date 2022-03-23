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
                    <h1 className={'ttmaq2'}>5F GT</h1>
                    <h1 className={'ttmaq1'}>5F GT</h1>
                    <div>
                        <p className={'textomob'}>
                        O Logset 5F GT é um forwarder versátil e compacto. é extremamentevbem adaptado para operações de desbaste, mas também pode ser usado para operações menores de corte raso. Trata-se de um forwarder de 12 toneladas com motor econômico, projetado para transportar cargas máximas. Os grandes pneus de 26,5” e a grande distância ao solo tornam esta máquina a escolha certa para vários tipos de terreno.
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/5f-gt-transparente.png" alt="maquina" width={450} height={350} />
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
