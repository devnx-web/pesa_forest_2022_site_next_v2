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
                    <h1 className={'ttmaq2'}>7000 XT</h1>
                    <h1 className={'ttmaq1'}>7000 XT</h1>
                    <div>
                        <p className={'textomob'}>
                        Referência mundial em cabeçotes florestais</p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/7000xt.png" alt="maquina" width={320} height={220} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Referência mundial em cabeçotes florestais. Os cabeçotes Log são de grande versatilidade e ideias para cada tipo de operação.   
                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/7000XT Log Max.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
