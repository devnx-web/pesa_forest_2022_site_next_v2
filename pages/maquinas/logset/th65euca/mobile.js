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
                    <h1 className={'ttmaq2'}>TH 65 EUCA</h1>
                    <h1 className={'ttmaq1'}>TH 65 EUCA</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/th65euca.png" alt="maquina" width={370} height={270} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Para corte e descascamento de eucaliptos de médio porte
Aplicação: 14 a 18 toneladas (primeiro desenho anexo, que é um harverster de pneus)
Aplicação: 16 a 20 toneladas (segundo desenho anexo, que é uma escavadeira de esteiras/ maquina base de esteiras)
download do catálogo
                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_TH65 Euca_EN.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
