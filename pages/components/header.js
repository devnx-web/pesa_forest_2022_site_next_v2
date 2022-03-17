import css from './header.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";

export default function Header() {

    return(
        <div className={css.ocultamob}>
        <div className={css.bgheader}>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
            <Container>
                <div>
                    <Row style={{alignItems: 'center'}}>
                        <Col md="2">
                            {/*Logo Forest*/}
                            <a href="/"><Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} /></a>
                        </Col>
                        <Col>
                            {/*Titulos do Header*/}
                            <div>
                                <Link href="/">
                                    <a className={css.textheader}>INICIO</a>
                                </Link>
                                <div className={css.dropdown}>
                                     <button className={css.dropbtn}><a className={css.link} href="/maquinas"> PRODUTOS </a> <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} /></button>
                                    <div className={css.dropdowncontent}>
                                        <div>
                                            <div className={css.dropdown2}>
                                                <button className={css.dropbtn2}>
                                                    <a className={css.link} href="/maquinas"> Caterpillar </a>
                                                    <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                </button>
                                                <div className={css.dropdowncontent2}>
                                                    <div>
                                                        <a className={css.nomemaq} href="/maquinas/caterpillar/pth18">PTH 18</a>
                                                        <a className={css.nomemaq} href="/maquinas/caterpillar/pth20">PTH 20</a>
                                                        <a className={css.nomemaq} href="/maquinas/caterpillar/ptl20">PTL 20</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={css.dropdown2}>
                                                <button style={{margin: 0, marginBottom: 15,}} className={css.dropbtn2}>
                                                    <a className={css.link} href="/maquinas"> LogSet </a>
                                                    <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                </button>
                                                <div className={css.dropdowncontent3}>
                                                    <Row>
                                                        <Col>
                                                            <a className={css.nomemaq} href="/maquinas/logset/4fgt">4F GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/5fgt">5F GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/5fpgt">5FP GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/5hpgt">5HP GT</a>

                                                        </Col>
                                                        <Col>
                                                            <a className={css.nomemaq} href="/maquinas/logset/6fgt">6F GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/6hpgt">6HP GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/6hpgte">6HP GTE</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/8fgt">8F GT</a>
                                                        </Col>
                                                        <Col>
                                                            <a className={css.nomemaq} href="/maquinas/logset/8hblack">8H GTE BLACK</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/8hgt">8H GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/8hgthybrid">8H GTE Hybrid</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/10fgt">10F GT</a>
                                                            <a className={css.nomemaq} href="/maquinas/logset/12hybrid">12H GTE Hybrid</a>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className={css.dropdown2}>
                                                <button style={{marginTop: -20,}} className={css.dropbtn2}>
                                                    <a className={css.link} href="/maquinas"> Weiler </a>
                                                    <Image className={css.image} src="/down2.svg" alt="logo" width={18} height={18} />
                                                </button>
                                                <div className={css.dropdowncontent2}>
                                                    <Row>
                                                        <Col md="4">
                                                            <div>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b457">B 457</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b458">B 458</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b570">B 570</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b670">B 670</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b670a">B 670A</a>
                                                            </div>
                                                        </Col>
                                                        <Col md="4">
                                                            <div>
                                                                 <a className={css.nomemaq} href="/maquinas/weiler/b757">B 757</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/b758">B 758</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/h157">H 157</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/h457">H 457</a>
                                                                 <a className={css.nomemaq} href="/maquinas/weiler/h458">H 458</a>
                                                            </div>
                                                        </Col>
                                                        <Col md="4">
                                                            <div>
                                                                 <a className={css.nomemaq} href="/maquinas/weiler/m860">M 860</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/s250">S 250</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/s350">S 350</a>
                                                                <a className={css.nomemaq} href="/maquinas/weiler/s450">S 450</a>
                                                                 <a className={css.nomemaq} href="/maquinas/weiler/s550">S 550</a>
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
