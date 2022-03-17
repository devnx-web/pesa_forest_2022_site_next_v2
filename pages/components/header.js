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
                                <Link href="/">
                                    <a>
                                        <Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} />
                                    </a>
                                </Link>
                            </Col>
                            <Col>
                                {/*Titulos do Header*/}
                                <div>
                                    <Link href="/">
                                        <a className={css.textheader}>INICIO</a>
                                    </Link>
                                    <div className={css.dropdown}>
                                        <button className={css.dropbtn}>
                                            <Link href="/maquinas">
                                                <a className={css.link}> PRODUTOS </a>
                                            </Link>
                                            <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                        </button>
                                        <div className={css.dropdowncontent}>
                                            <div>
                                                <div className={css.dropdown2}>
                                                    <button className={css.dropbtn2}>
                                                        <Link href="/maquinas"><a className={css.link}> Caterpillar </a></Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent2}>
                                                        <div>
                                                            <Link href="/maquinas/caterpillar/pth18"><a className={css.nomemaq}>PTH 18</a></Link>
                                                            <Link href="/maquinas/caterpillar/pth20"><a className={css.nomemaq}>PTH 20</a></Link>
                                                            <Link href="/maquinas/caterpillar/ptl20"><a className={css.nomemaq}>PTL 20</a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ margin: 0, marginBottom: 15, }} className={css.dropbtn2}>
                                                        <Link href="/maquinas">
                                                            <a className={css.link}> LogSet </a>
                                                        </Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent3}>
                                                        <Row>
                                                            <Col>
                                                                <Link href="/maquinas/logset/4fgt"><a className={css.nomemaq}>4F GT</a></Link>
                                                                <Link href="/maquinas/logset/5fgt"><a className={css.nomemaq}>5F GT</a></Link>
                                                                <Link href="/maquinas/logset/5fpgt"><a className={css.nomemaq}>5FP GT</a></Link>
                                                                <Link href="/maquinas/logset/5hpgt"><a className={css.nomemaq}>5HP GT</a></Link>

                                                            </Col>
                                                            <Col>
                                                                <Link href="/maquinas/logset/6fgt"><a className={css.nomemaq}>6F GT</a></Link>
                                                                <Link href="/maquinas/logset/6hpgt"><a className={css.nomemaq}>6HP GT</a></Link>
                                                                <Link href="/maquinas/logset/6hpgte"><a className={css.nomemaq}>6HP GTE</a></Link>
                                                                <Link href="/maquinas/logset/8fgt"><a className={css.nomemaq}>8F GT</a></Link>
                                                            </Col>
                                                            <Col>
                                                                <Link href="/maquinas/logset/8hblack"><a className={css.nomemaq}>8H GTE BLACK</a></Link>
                                                                <Link href="/maquinas/logset/8hgt"><a className={css.nomemaq}>8H GT</a></Link>
                                                                <Link href="/maquinas/logset/8hgthybrid"><a className={css.nomemaq}>8H GTE Hybrid</a></Link>
                                                                <Link href="/maquinas/logset/10fgt"><a className={css.nomemaq}>10F GT</a></Link>
                                                                <Link href="/maquinas/logset/12hybrid"><a className={css.nomemaq}>12H GTE Hybrid</a></Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link href="/maquinas">
                                                            <a className={css.link}> Weiler </a>
                                                        </Link>
                                                        <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                    </button>
                                                    <div className={css.dropdowncontent2}>
                                                        <Row>
                                                            <Col md="4">
                                                                <div>
                                                                    <Link href="/maquinas/weiler/b457"><a className={css.nomemaq}>B 457</a></Link>
                                                                    <Link href="/maquinas/weiler/b458"><a className={css.nomemaq}>B 458</a></Link>
                                                                    <Link href="/maquinas/weiler/b570"><a className={css.nomemaq}>B 570</a></Link>
                                                                    <Link href="/maquinas/weiler/b670"><a className={css.nomemaq}>B 670</a></Link>
                                                                    <Link href="/maquinas/weiler/b670a"><a className={css.nomemaq}>B 670A</a></Link>
                                                                </div>
                                                            </Col>
                                                            <Col md="4">
                                                                <div>
                                                                    <Link href="/maquinas/weiler/b757"><a className={css.nomemaq}>B 757</a></Link>
                                                                    <Link href="/maquinas/weiler/b758"><a className={css.nomemaq}>B 758</a></Link>
                                                                    <Link href="/maquinas/weiler/h157"><a className={css.nomemaq}>H 157</a></Link>
                                                                    <Link href="/maquinas/weiler/h457"><a className={css.nomemaq}>H 457</a></Link>
                                                                    <Link href="/maquinas/weiler/h458"><a className={css.nomemaq}>H 458</a></Link>
                                                                </div>
                                                            </Col>
                                                            <Col md="4">
                                                                <div>
                                                                    <Link href="/maquinas/weiler/m860"><a className={css.nomemaq}>M 860</a></Link>
                                                                    <Link href="/maquinas/weiler/s250"><a className={css.nomemaq}>S 250</a></Link>
                                                                    <Link href="/maquinas/weiler/s350"><a className={css.nomemaq}>S 350</a></Link>
                                                                    <Link href="/maquinas/weiler/s450"><a className={css.nomemaq}>S 450</a></Link>
                                                                    <Link href="/maquinas/weiler/s550"><a className={css.nomemaq}>S 550</a></Link>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/sobrenos">
                                        <a className={css.textheader}>SOBRE A PESA FOREST</a>
                                    </Link>
                                    <Link href="/contato">
                                        <a className={css.textheader}>CONTATO</a>
                                    </Link>
                                </div>
                            </Col>
                            <Col md="2">
                                {/*Botão header Entre em contato*/}

                                <Link href="/contato">
                                    <a className={css.botaoctt}>
                                        Entrar em Contato
                                    </a>
                                </Link>
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
