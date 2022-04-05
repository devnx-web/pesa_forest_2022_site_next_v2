import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../components/detalhesmaquinaresponsive";
import Maqpth18mob from "../../../home/maqpth18mob";
import Link from "next/link"


export default function Sobre(){
    const [tab, setTab] = useState('RESUMO')
    return(
        <div className={style.bgsobre}>
            <Container className={'pt-5 pb-5'}>
                <div className={css.ocultamob}>
                    <div className={css.s250}>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>6HP GTE</h2>
                                    <h2 className={css.ttmaq1}>6HP GTE</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        O Logset 6HP GTE é um harvester de médio porte 8x8, estável e econômico. A máquina é projetada para operações de desbaste menores e corte raso, de médio porte.

                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_6HP GTE_EN_web.pdf"><a target="_blank"><div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
                                    </div></a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className={css.ocultadesk}>
                    <div>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>6HP GTE</h2>
                                    <h2 className={css.ttmaq1}>6HP GTE</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis est elit, dictum ut porttitor vitae.
                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/pth18.png" alt="logo" width={400} height={280} />
                                    </div>
                                    <div className={css.botaosaber}>
                                        SABER MAIS
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    )
}
