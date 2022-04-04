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
                                    <h2 className={css.ttmaq2}>24 C</h2>
                                    <h2 className={css.ttmaq1}>24 C</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        Os cabeçotes de disco da linha C, são os mais compactos e robustos do mercado. Atuando nos mais diferentes modelos de Feller Bunchers
                                        </p>
                                    </div>
                                    <Link href="Os cabeçotes de disco da linha C, são os mais compactos e robustos do mercado. Atuando nos mais diferentes modelos de Feller Bunchers"><a target="_blank"><div className={css.botaosaber}>
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
                                    <h2 className={css.ttmaq2}>5FP GT</h2>
                                    <h2 className={css.ttmaq1}>5FP GT</h2>
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
