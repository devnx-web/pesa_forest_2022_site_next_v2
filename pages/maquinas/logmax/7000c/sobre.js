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
                                    <h2 className={css.ttmaq2}>7000 C</h2>
                                    <h2 className={css.ttmaq1}>7000 C</h2>
                                    <h3 className={css.destaque}>Referência mundial em cabeçotes florestais</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        Referência mundial em cabeçotes florestais. Os cabeçotes Log são de grande versatilidade e ideias para cada tipo de operação. 
                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/7000C Log Max.pdf"><a target="_blank"><div className={css.botaosaber}>
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
                                    <h2 className={css.ttmaq2}>7000 C</h2>
                                    <h2 className={css.ttmaq1}>7000 C</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        É fabricado com uma estrutura robusta e tem um excelente desempenho para troncos pesados e muito ramificados.

Log Max 7000C combina alto potencial de tração com velocidade de alimentação rápida e é um dos nossos cabeçotes mais populares.<br/>
Temos no 7000C duas opções para a tração.
A versão com redutor proporciona 41,7KN de força a uma velocidade de 3,9m/s, ideal para florestas mais densas e arvores mais pesadas.
A versão sem o redutor proporciona 35,9KNde força a uma velocidade de 5,3 m/s. Estas opções garantem melhor consumo de acordo com a floresta utilizada.                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/7000c.png" alt="logo" width={400} height={280} />
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
