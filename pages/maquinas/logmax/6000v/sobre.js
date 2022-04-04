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
                                    <h2 className={css.ttmaq2}>6000V</h2>
                                    <h2 className={css.ttmaq1}>6000V</h2>
                                    <h3 className={css.destaque}>O novo Log Max 6000V finalmente chegou.</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        O campeão de vendas 6000B foi melhorado ainda mais para atender às demandas do mercado.
Com o objetivo de sempre fornecer os melhores produtos, nós continuamente desenvolvemos nossos
cabeçotes. Nossa filosofia é trabalhar junto ao cliente para que possamos entender as demandas no setor
florestal e com isso podermos implementar aos nossos produtos as melhorias que tornarão o processo de
colheita mais suave, com menos hora de máquina parada, e muita produtividade..
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
                                    <h2 className={css.ttmaq2}>6000 V</h2>
                                    <h2 className={css.ttmaq1}>6000 V</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        O campeão de vendas 6000B foi melhorado ainda mais para atender às demandas do mercado.
Com o objetivo de sempre fornecer os melhores produtos, nós continuamente desenvolvemos nossos
cabeçotes. Nossa filosofia é trabalhar junto ao cliente para que possamos entender as demandas no setor
florestal e com isso podermos implementar aos nossos produtos as melhorias que tornarão o processo de
colheita mais suave, com menos hora de máquina parada, e muita produtividade..                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/6000v.png" alt="logo" width={400} height={280} />
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
