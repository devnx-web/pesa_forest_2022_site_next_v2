import React from "react";
import { Container } from 'reactstrap'
import Image from "next/image";


export default function Mobile() {
    return (
        <div classNmae={'ocultadesk'}>
            <div className={'bgmobile'}>
                <Container>
                    <div>
                        <h1 className={'ttmaq2'}>10F GT</h1>
                        <h1 className={'ttmaq1'}>10F GT</h1>
                        <div>
                            <p className={'textomob'}>
                                Lorem Ipsum dolor sit amet
                            </p>
                            <div className={'imgposi'}>
                                <Image src="/maquinas/10f-gt.png" alt="maquina" width={450} height={350} />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div className={'desc'}>
                <Container>
                    <p className={'textodesc'}>
                    É um forwarder de 18 toneladas de capacidade e tem uma estrutura excepcionalmente robusta e confiável.

                    </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
