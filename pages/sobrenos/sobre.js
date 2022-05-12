import style from './sobre.module.css'
import css from './sobre.module.css'
import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Formulario from "./formulario";


export default function Sobre() {
    const [tab, setTab] = useState('RESUMO')
    return (
        <div className={style.bgsobre}>
            <Container className={'pt-5 pb-5'}>
                <div>
                    <div className={css.img}>
                        <Container>
                            <Row>
                                <Col style={{ paddingLeft: 0 }} md="5">
                                    <h2 className={css.ttmaq2}>Sobre Nós</h2>
                                    <h2 className={css.ttmaq1}>Sobre Nós</h2>
                                    {/* <h3 className={css.destaque}>Frase destaque</h3> */}
                                    <div>
                                        <p className={css.textomaq}>
                                        A PESA Forest oferece há mais de 25 anos uma completa solução para atender a indústria florestal, com as mais renomadas marcas: Caterpillar, Weiler, Quadco, Logmax e Logset. <br/>
                                        Iniciando na construção e manutenção de estradas, passando por colheita, baldeio e carregamento, nos sistemas CTL e Full Tree, até máquinas para operações em pátios de madeira.É tudo o que você precisa para ter produtividade, agilidade, e versatilidade para a sua operação florestal.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className={css.ocultadesk}>
                    <div>
                        <Container>
                            {/* <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>PTH 18</h2>
                                    <h2 className={css.ttmaq1}>PTH 18</h2>
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
                            </Row> */}

                        </Container>
                    </div>
                </div>
            </Container>
            <Formulario />
        </div>


    )
}
