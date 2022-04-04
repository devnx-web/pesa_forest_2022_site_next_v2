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
                    <h1 className={'ttmaq2'}>22 SC</h1>
                    <h1 className={'ttmaq1'}>22 SC</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/quadco-22sc.png" alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                Os cabeçotes de disco da linha C, são os mais compactos e robustos do mercado. Atuando nos mais diferentes modelos de Feller Bunchers
                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/QC_One-Sheet-22SC_11.10.20_CMYK.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
