import css from './header.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";

export default function Navbar() {

    return (
        <div className={css.ocultamob}>
            <div className={css.bgheader}>
                <Link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <Container>
                    <div>
                        <Row style={{ alignItems: 'center' }}>
                            <Col md="2">
                                {/*Logo Forest*/}
                                <Link to="/"><Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} /></Link>
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
                                                                <Link className={css.nomemaq} href="/maquinas/logset/4fgt">
                                                                    <a>4F GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5fgt">
                                                                    <a>5F GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5fpgt">
                                                                    <a>5FP GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/5hpgt">
                                                                    <a>5HP GT</a>
                                                                </Link>

                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6fgt">
                                                                    <a>6F GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6hpgt">
                                                                    <a>6HP GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/6hpgte">
                                                                    <a>6HP GTE</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8fgt">
                                                                    <a>8F GT</a>
                                                                </Link>
                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hblack">
                                                                    <a>8H GTE BLACK</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hgt">
                                                                    <a>8H GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hgthybrid">
                                                                    <a>8H GTE Hybrid</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/10fgt">
                                                                    <a>10F GT</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/12hybrid">
                                                                    <a>12H GTE Hybrid</a>
                                                                </Link>
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
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b457">
                                                                        <a>B 457</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b670a">
                                                                        <a>B 670A</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h457">
                                                                        <a>H 457</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h458">
                                                                        <a>H 458</a>
                                                                    </Link>
                                                                </div>
                                                            </Col>
                                                            <Col>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s250">
                                                                    <a>S 250</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s350">
                                                                    <a>S 350</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s450">
                                                                    <a>S 450</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s550">
                                                                    <a>S 550</a>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/sobrenos" className={css.textheader}>
                                        <a>SOBRE A PESA FOREST</a>
                                    </Link>
                                    <Link href="/contato" className={css.textheader}>
                                        <a>CONTATO</a>
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
