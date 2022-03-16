import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../../components/detalhesmaquinaresponsive";
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
                                    <h2 className={css.ttmaq2}>6HP GTE</h2>
                                    <h2 className={css.ttmaq1}>6HP GTE</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                            Lorem ipsum dolor sit amet. Aut galisum nihil qui iusto consectetur ea eligendi blanditiis. Et dolor officiis sed esse omnis sit sapiente voluptates aut voluptate sequi sed molestiae esse vel magni odio.

                                            Qui quia minus et porro blanditiis et adipisci praesentium. Qui dolorum quia sed odit deleniti sit reiciendis magnam in sunt nesciunt ut odit enim ut dolorem iure vel praesentium voluptatem.
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
                                    <h2 className={css.ttmaq2}>6HP GTE</h2>
                                    <h2 className={css.ttmaq1}>6HP GTE</h2>
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
