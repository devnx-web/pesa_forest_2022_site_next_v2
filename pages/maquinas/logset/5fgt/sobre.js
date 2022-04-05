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
                                    <h2 className={css.ttmaq2}>5F GT</h2>
                                    <h2 className={css.ttmaq1}>5F GT</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        O Logset 5F GT é um forwarder versátil e compacto. é extremamentevbem adaptado para operações de desbaste, mas também pode ser usado para operações menores de corte raso. Trata-se de um forwarder de 12 toneladas com motor econômico, projetado para transportar cargas máximas. Os grandes pneus de 26,5” e a grande distância ao solo tornam esta máquina a escolha certa para vários tipos de terreno.
                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/LOGSET_5F GT_EN_0.pdf"><a target="_blank"><div className={css.botaosaber}>
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
                                    <h2 className={css.ttmaq2}>5F GT</h2>
                                    <h2 className={css.ttmaq1}>5F GT</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        O Logset 5F GT é um forwarder versátil e compacto. é extremamentevbem adaptado para operações de desbaste, mas também pode ser usado para operações menores de corte raso. Trata-se de um forwarder de 12 toneladas com motor econômico, projetado para transportar cargas máximas. Os grandes pneus de 26,5” e a grande distância ao solo tornam esta máquina a escolha certa para vários tipos de terreno.
                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/5f-gt-transparente.png" alt="logo" width={400} height={280} />
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
