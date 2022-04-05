import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
// import css from "../../../../../components/header.module.css";


export default function Mobile(){
    return(
        <div>
            <div className={'ocultadesk'}>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>PTH 18</h1>
                    <h1 className={'ttmaq1'}>PTH 18</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/pth18.png" alt="maquina" width={380} height={280} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <div>
                    <p className={'textomaq'}>
                    Focada no alto desempenho para operações florestais, a PTH 18 foi projetada pela equipe da PESA Indústria que uniu a tecnologia e robustez da marca Caterpillar com a precisão na operação. Com força hidráulica adequada e com 8,5 metros de alcance ao nível do solo, é o equipamento ideal para operações harvester. Para primeiro e segundo desbaste, bem como corte raso.
                    </p>
                </div>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/PTH18 Specalog.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
            </div>
        </div>
    )
}
