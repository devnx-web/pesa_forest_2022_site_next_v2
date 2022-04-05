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
                    <h1 className={'ttmaq2'}>4F GT</h1>
                    <h1 className={'ttmaq1'}>4F GT</h1>
                    <div>
                        <p className={'textomob'}>
                        

                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/4f-gt-transparente.png" alt="maquina" width={480} height={380} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                É o menor Forwarder  do portifólio Logset . A máquina tem capacidade de 10 toneladas de carga e é especialmente concebida para operações de desbaste em florestas densas.
exerce a menor pressão sob o solo em todos os tipos de terreno, causando mínimos danos ao mesmo. 
                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_4F GT_EN_1.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
