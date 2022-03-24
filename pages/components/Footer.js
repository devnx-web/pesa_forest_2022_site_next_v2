import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footercop from "./footercop";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './footer.module.css'

export default function Footer() {
    return (
        <div>
        <div className={css.bgfooter}>
            <Container>
                <div>
                    <div className={css.cardredes}>
                        <div>
                            <Row>
                                <Col md="4">
                                    <h2 className={css.textacompanhe}>NOS ACOMPANHE NAS REDES</h2>
                                    <div className={css.flex}>
                                        <a href="https://web.facebook.com/pesaforestpr" rel="noreferrer" target="_blank" className={css.icone}>
                                            <Image src="/facebook.png" alt="logo" width={16} height={16} />
                                        </a>
                                        <a href="https://www.instagram.com/pesaforest/" rel="noreferrer" target="_blank" className={css.icone}>
                                            <Image src="/instagram.png" alt="logo" width={16} height={16} />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC5VrF3OGPWOVF4hM4sVMiHw" rel="noreferrer" target="_blank" className={css.icone}>
                                            <Image src="/youtube.png" alt="logo" width={16} height={16} />
                                        </a>
                                        <a href="https://br.linkedin.com/company/pesa-forestpr" rel="noreferrer" target="_blank" className={css.icone}>
                                            <Image src="/linkedin.png" alt="logo" width={16} height={16} />
                                        </a>
                                    </div>
                                </Col>
                                <Col md="2">
                                    <h2 className={css.textoligado}>FIQUE LIGADO NAS <br /> NOVIDADES!</h2>
                                </Col>
                                <Col md="4">
                                    <input className={css.inputemail} type="text" placeholder="E-mail" />
                                </Col>
                                <Col>
                                    <div className={css.botao}>
                                        INSCREVER
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Row>
                        <Col md={3} xs="6">
                            <h2 className={css.titulofooter}>MAPA DO SITE</h2>

                            <div>
                            <Link className={css.link} href="/contato">
                                <a className={css.textofooter}>
                                     Contato 
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/sobrenos">
                                <a className={css.textofooter}>
                                    Sobre nós
                                </a>
                            </Link>
                            </div>

                            
                        </Col>
                        <Col md={3} xs="6">
                            <div>
                            <Link className={css.link} href="/maquinas">
                                <a>
                                    <h2 className={css.titulofooter}>MAQUINAS</h2>
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/maquinas/caterpillar/pth18">
                                <a className={css.textofooter}>
                                    PTH 18
                                </a>
                            </Link>
                            </div>

                            {/* <Link className={css.link} href="/maquinas/caterpillar/pth20">
                                <a>
                                    <h4 className={css.textofooter}>PTH 20</h4>
                                </a>
                            </Link> */}

                            <div>
                            <Link className={css.link} href="/maquinas/caterpillar/ptl20">
                            <a className={css.textofooter}>
                                     PTL 20
                                 </a>
                            </Link>
                            </div>
                        </Col>
                        <Col md={3} xs="6">
                             <h2 className={css.titulofooter}>INSTITUCIONAL</h2>

                             <Link className={css.link} href="/sobrenos">
                                 <a className={css.textofooter}>
                                    Sobre a PESA® Forest
                                 </a>
                             </Link>

                            <Link href="/politica-de-privacidade"><a className={css.textofooter}><br/>Politica de Privacidade</a></Link>
                        </Col>
                        <Col md={3} xs="6">
                            <h2 className={css.titulofooter}>INFORMAÇÕES DE CONTATO</h2>
                            <div>
                            <Link className={css.link} href="tel:08009407372">
                                <a className={css.textofooter}>
                                    0800 940 7372
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="mailto:marketing@pesa.com.br">
                                <a className={css.textofooter}>marketing@pesa.com.br
                                </a>
                            </Link>
                            </div>

                            {/* <div>
                            <Link className={css.link} href="https://g.page/pesacat?share">
                                <a target="_blank" className={css.textofooter}>
                                BR-116, 11807 - Hauer, Curitiba - PR, 81690-100
                                </a>
                            </Link>
                            </div> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <Footercop/>
        </div>
    )

}
