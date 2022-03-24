import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../components/detalhesmaquinaresponsive";
import Maqpth18mob from "../../../home/maqpth18mob";



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
                                    <h2 className={css.ttmaq2}>PSM 36</h2>
                                    <h2 className={css.ttmaq1}>PSM 36</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        PESA TRACK LOADER PTL 20 é uma máquina fabricada no Brasil e projetada para atender o mercado florestal, possui lança reta de 5680mm e braço de 2900mm para uma maior performance no carregamento. Fabricada para se sobressair em aplicações de carga e descarga, a PTL 20 apresenta potência otimizada e sistemas para máxima produção. A construção reforçada é evidente de ponta a ponta para garantir uma longa vida útil e segurança do operador.
                                        </p>
                                    </div>
                                    <div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
                                    </div>
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
                                    <h2 className={css.ttmaq2}>PSM 36</h2>
                                    <h2 className={css.ttmaq1}>PSM 36</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        A PSM 36 (Pesa Stationary machine) é um projeto Pesa, oriundo da Caterpillar 336, totalmente eletroeletrônica, para alimentação de mesas. Oferece todo o conforto e ergonomia Caterpillar, além de operação continua com alta disponibilidade e baixíssimos custos de manutenção. Opera com todos os comprimentos de toras, com alta performance
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
