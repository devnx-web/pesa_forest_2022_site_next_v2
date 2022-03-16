import css from './header.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";

export default function Header() {

    return (
        <div className={css.ocultamob}>
            <div className={css.bgheader}>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <Container>
                    <div>
                        <Row style={{ alignItems: 'center' }}>
                            <Col md="2">
                                {/*Logo Forest*/}
                                <Link href="/"><Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} /></Link>
                            </Col>
                            <Col>
                                {/*Titulos do Header*/}
                                <div>
                                    <Link href="/" className={css.textheader}>
                                        <a>INICIO</a>
                                    </Link>
                                    <div className={css.dropdown}>
                                        <button className={css.dropbtn}>
                                            <Link className={css.link} href="/maquinas">
                                                <a> MÁQUINAS </a>
                                            </Link>
                                            <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                        </button>
                                        <div className={css.dropdowncontent}>
                                            <div>
                                                <div className={css.dropdown2}>
                                                    <button className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas">
                                                            <a>
                                                                Caterpillar
                                                            </a>
                                                        </Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent2}>
                                                        <div>
                                                            <Link className={css.nomemaq} href="/maquinas/caterpillar/pth18">
                                                                <a>
                                                                    PTH 18
                                                                </a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/caterpillar/ptl20">
                                                                <a>
                                                                    PTL 20
                                                                </a>
                                                            </Link>
                                                            <Link href="/maquinas/caterpillar/pth20">
                                                                <a>PTH 20</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ margin: 0, marginBottom: 15, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"> LogSet </Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent3}>
                                                        <Row>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/4fgt">4F GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5fgt">5F GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5fpgt">5FP GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5hpgt">5HP GT</Link>

                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6fgt">6F GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6hpgt">6HP GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6hpgte">6HP GTE</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8fgt">8F GT</Link>
                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hblack">8H GTE BLACK</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hgt">8H GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hgthybrid">8H GTE Hybrid</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/10fgt">10F GT</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/12hybrid">12H GTE Hybrid</Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"> Weiler </Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent2}>
                                                        <Row>
                                                            <Col>
                                                                <div>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b457">B 457</Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b670a">B 670A</Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h457">H 457</Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h458">H 458</Link>

                                                                </div>
                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s250">S 250</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s350">S 350</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s450">S 450</Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s550">S 550</Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/sobrenos">
                                        <Link className={css.textheader}>SOBRE A PESA FOREST</Link>
                                    </Link>
                                    <Link href="/contato">
                                        <Link className={css.textheader}>CONTATO</Link>
                                    </Link>
                                </div>
                            </Col>
                            <Col md="2">
                                {/*Botão header Entre em contato*/}
                                <div className={css.botaoctt}>
                                    Entrar em Contato
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <div className={css.flex}>
                        <div className={css.borda}>

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )

}
