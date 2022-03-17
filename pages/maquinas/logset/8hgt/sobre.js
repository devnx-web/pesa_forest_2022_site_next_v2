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
                                    <h2 className={css.ttmaq2}>8H GT</h2>
                                    <h2 className={css.ttmaq1}>8H GT</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                            A Logset 8H GT é uma ceifeira potente e ágil que roda facilmente. É
                                            ligeiramente mais curta e mais leve que o modelo de ceifeira de oito rodas
                                            Logset 8H GTE. A Logset 8H GT se adequa a operações de desbaste, no
                                            entanto, trabalha melhor em cortes de médio e grande tamanho. Este
                                            modelo de ceifeira tem uma sólida reputação devido a uma produtividade e
                                            a economia de combustível imbatível. O potente motor de 7,4 litros
                                            AGCO Power, com 214 kW (291 hp), combinado com a grua Mesera 240H, é
                                            a máquina perfeita para desafiar operações de abate.
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
                                    <h2 className={css.ttmaq2}>8H GT</h2>
                                    <h2 className={css.ttmaq1}>8H GT</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                            A Logset 8H GT é uma ceifeira potente e ágil que roda facilmente. É
                                            ligeiramente mais curta e mais leve que o modelo de ceifeira de oito rodas
                                            Logset 8H GTE. A Logset 8H GT se adequa a operações de desbaste, no
                                            entanto, trabalha melhor em cortes de médio e grande tamanho. Este
                                            modelo de ceifeira tem uma sólida reputação devido a uma produtividade e
                                            a economia de combustível imbatível. O potente motor de 7,4 litros
                                            AGCO Power, com 214 kW (291 hp), combinado com a grua Mesera 240H, é
                                            a máquina perfeita para desafiar operações de abate.                                        </p>
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
