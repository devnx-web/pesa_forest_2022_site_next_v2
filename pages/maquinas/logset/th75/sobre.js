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
                                    <h2 className={css.ttmaq2}>TH 75</h2>
                                    <h2 className={css.ttmaq1}>TH 75</h2>
                                    <h3 className={css.destaque}>POR QUE ESCOLHER LOGSET?</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        Os cabeçotes Logset Euca são versáteis e duráveis. Sua capacidade de descasque é notável devido ao conceito de
três rolos de última geração e ao perfil específico de facas de
descasque Euca. O cabeçote Logset Euca pode ser configurado
de fábrica para trabalhar como um cabeçote processador ou
como um harvester convencional de derrubada e corte (CTL)     
<br/>
Os cabeçotes Logset Euca foram feitos para durar, projetados com baixo custo de manutenção e com alta produtividade em mente. O
alto torque de alimentação com mínimo atrito deslizante contribui
para a economia de combustível.

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
                            </Row>

                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    )
}
