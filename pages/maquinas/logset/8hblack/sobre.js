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
                                    <h2 className={css.ttmaq2}>8H GTE BLACK</h2>
                                    <h2 className={css.ttmaq1}>8H GTE BLACK</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                            Lorem ipsum dolor sit amet. Nam voluptatum accusamus est repudiandae voluptas est aliquam saepe rem necessitatibus omnis et fuga neque. Eos voluptate aliquam et repellat provident nam neque natus et ducimus voluptate ut laudantium quam ut eaque incidunt.

                                            Ab dolore reiciendis sed nihil quis aut temporibus voluptates. Cupiditate aliquid vel sequi laboriosam qui autem perspiciatis quo pariatur voluptatem id Quis adipisci qui enim molestias id magnam vitae. Sed debitis internos est omnis quidem in natus dolore
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
                                    <h2 className={css.ttmaq2}>8H GTE BLACK</h2>
                                    <h2 className={css.ttmaq1}>8H GTE BLACK</h2>
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
