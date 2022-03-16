import css from './footer.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";

export default function Footer() {
    return (
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
                                        <a href="https://br.linkedin.com/company/pesa-s-a" rel="noreferrer" target="_blank" className={css.icone}>
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
                            <h4 className={css.textofooter}><Link className={css.link} href="/contato"> Contato </Link></h4>
                            <h4 className={css.textofooter}><Link className={css.link} href="/sobrenos">Sobre nós</Link></h4>
                            <h4 className={css.textofooter}>Venda de máquinas</h4>
                        </Col>
                        <Col md={3} xs="6">
                            <Link className={css.link} href="/maquinas">
                                <a><h2 className={css.titulofooter}>MAQUINAS</h2></a>
                            </Link>
                            <h4 className={css.textofooter}><Link className={css.link} href="/maquinas/caterpillar/pth18">PTH 18</Link></h4>
                            {/* <Link className={css.link} href="/maquinas/caterpillar/pth20">
                                <a>
                                    <h4 className={css.textofooter}>PTH 20</h4>
                                </a>
                            </Link> */}
                            <h4 className={css.textofooter}><Link className={css.link} href="/maquinas/caterpillar/ptl20">PTL 20</Link></h4>
                        </Col>
                        <Col md={3} xs="6">
                            <h2 className={css.titulofooter}>INSTITUCIONAL</h2>
                            <h4 className={css.textofooter}><Link className={css.link} href="/sobrenos">Sobre a PESA® Forest</Link></h4>
                            <h4 className={css.textofooter}>Politica de Privacidade</h4>
                        </Col>
                        <Col md={3} xs="6">
                            <h2 className={css.titulofooter}>INFORMAÇÕES DE CONTATO</h2>
                            <h4 className={css.textofooter}><Link className={css.link} href="tel:08009407372">0800 940 7372</Link></h4>
                            <h4 className={css.textofooter}><Link className={css.link} href="mailto:marketing@pesa.com.br">marketing@pesa.com.br</Link></h4>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )

}
