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
                    <h1 className={'ttmaq2'}>PSM 36</h1>
                    <h1 className={'ttmaq1'}>PSM 36</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/psm36.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                A PSM 36 (Pesa Stationary machine) é um projeto Pesa, oriundo da Caterpillar 336, totalmente eletroeletrônica, para alimentação de mesas. Oferece todo o conforto e ergonomia Caterpillar, além de operação continua com alta disponibilidade e baixíssimos custos de manutenção. Opera com todos os comprimentos de toras, com alta performance. 

                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/Spec 320D-SM Estacionária (1) (1).pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
