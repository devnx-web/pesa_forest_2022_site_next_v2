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
                                        <Link href="https://www.instagram.com/pesaforest/" rel="noreferrer">
                                            <a target="_blank" className={css.icone}>
                                                <Image src="/instagram.png" alt="logo" width={16} height={16} />
                                            </a>
                                        </Link>
                                            <Link href="https://www.youtube.com/channel/UC5VrF3OGPWOVF4hM4sVMiHw" rel="noreferrer">
                                            <a target="_blank" className={css.icone}>
                                                <Image src="/youtube.png" alt="logo" width={16} height={16} />
                                            </a>
                                        </Link>
                                        <Link href="https://br.linkedin.com/company/pesa-forestpr" rel="noreferrer">
                                            <a target="_blank" className={css.icone}>
                                                <Image src="/linkedin.png" alt="logo" width={16} height={16} />
                                            </a>
                                        </Link>
                                        <Link href="https://web.facebook.com/pesaforestpr" rel="noreferrer">
                                            <a target="_blank" className={css.icone}>
                                                <Image src="/facebook.png" alt="logo" width={16} height={16} />
                                            </a>
                                        </Link>
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
                            <Link className={css.link} href="/maquinas">
                                <a className={css.textofooter}>
                                     Produtos
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/sobrenos">
                                <a className={css.textofooter}>
                                    Sobre a PESA Forest
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/contato">
                                <a className={css.textofooter}>
                                    Contato
                                </a>
                            </Link>
                            </div>

                            
                        </Col>
                        <Col md={3} xs="6">
                            <div>
                            <Link className={css.link} href="/maquinas">
                                <a>
                                    <h2 className={css.titulofooter}>PRODUTOS</h2>
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/maquina/maquina_pth18">
                                <a className={css.textofooter}>
                                    PTH 18
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="/maquina/maquina_pth20">
                                <a className={css.textofooter}>
                                    PTH 20
                                </a>
                            </Link>
                            </div>

                            {/* <Link className={css.link} href="/maquinas/caterpillar/pth20">
                                <a>
                                    <h4 className={css.textofooter}>PTH 20</h4>
                                </a>
                            </Link> */}

                            <div>
                            <Link className={css.link} href="/maquina/maquina_ptl20">
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
                        <Col className={css.column} md={3} xs="6">
                            <h2 className={css.titulofooter}>INFORMAÇÕES DE CONTATO</h2>
                            <div>
                            <Link className={css.link} href="https://api.whatsapp.com/send?phone=554121032211&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PESA%20Forest%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!">
                                <a target="_blank" className={css.textofooter}>
                                (41) 2103-2211
                                </a>
                            </Link>
                            </div>

                            <div>
                            <Link className={css.link} href="mailto:lima_rogerio@pesa.com.br">
                                <a target="_blank" className={css.textofooter}>lima_rogerio@pesa.com.br
                                </a>
                            </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <Footercop/>
        </div>
    )

}
