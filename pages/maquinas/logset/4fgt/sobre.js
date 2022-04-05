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
                                    <h2 className={css.ttmaq2}>4F GT</h2>
                                    <h2 className={css.ttmaq1}>4F GT</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        É o menor Forwarder  do portifólio Logset . A máquina tem capacidade de 10 toneladas de carga e é especialmente concebida para operações de desbaste em florestas densas.
exerce a menor pressão sob o solo em todos os tipos de terreno, causando mínimos danos ao mesmo. 

                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_4F GT_EN_1.pdf"><a target="_blank"><div className={css.botaosaber}>
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
                                    <h2 className={css.ttmaq2}>4F GT</h2>
                                    <h2 className={css.ttmaq1}>4F GT</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        É o menor Forwarder  do portifólio Logset . A máquina tem capacidade de 10 toneladas de carga e é especialmente concebida para operações de desbaste em florestas densas.
exerce a menor pressão sob o solo em todos os tipos de terreno, causando mínimos danos ao mesmo. 

                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/4f-gt-transparente.png" alt="logo" width={400} height={280} />
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
