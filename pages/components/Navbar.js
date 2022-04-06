import css from './header.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import Headermob from './headermob';

export default function Navbar() {

    return (
        <div >
            <div><Headermob/></div>
            <div className={css.ocultamob}>
            <div className={css.bgheader}>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet"/>
                <Container>
                    <div>
                        <Row style={{ alignItems: 'center' }}>
                            <Col md="2">
                                <Link href="/"><a><Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} /></a></Link>
                            </Col>
                            <Col>
                                {/*Titulos do Header*/}
                                <div>
                                    {/* <Link href="/" className={css.textheader}>
                                        <a className={css.linkmenu}>INICIO</a>
                                    </Link> */}
                                    <div className={css.dropdown}>
                                        <button className={css.dropbtn}>
                                            <Link className={css.link} href="/maquinas">
                                                <a className={css.linkmenu}> PRODUTOS </a>
                                            </Link>
                                            <Image src="/down.svg" alt="logo" width={19} height={19} />
                                        </button>
                                        <div className={css.dropdowncontent}>
                                            <div>
                                                <div className={css.dropdown2}>
                                                    <button className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas">
                                                            <a className={css.border}>
                                                                Caterpillar
                                                            </a>
                                                        </Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>

                                                    <div style={{float: 'right'}}>
                                                    <div style={{width: 150,}} className={css.dropdowncontent2}>

                                                        <div>
                                                            {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                                Caterpillar
                                                            </div> */}
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
                                                            <Link href="/maquinas/caterpillar/pth25">
                                                                <a>PTH 25</a>
                                                            </Link>
                                                            <Link href="/maquinas/caterpillar/psm20">
                                                                <a>PSM 20</a>
                                                            </Link>
                                                            <Link href="/maquinas/caterpillar/psm36">
                                                                <a>PSM 36</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>


                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"><a className={css.border}>Logmax</a></Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>
                                                    <div style={{float: 'right'}}>
                                                    <div style={{width: 150,}} className={css.dropdowncontent2}>

                                                        <div>
                                                            {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                                Caterpillar
                                                            </div> */}
                                                            <Link className={css.nomemaq} href="/maquinas/logmax/5000d">
                                                                <a>
                                                                    5000 D
                                                                </a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logmax/6000v">
                                                                <a>
                                                                    6000 V
                                                                </a>
                                                            </Link>
                                                            <Link href="/maquinas/logmax/7000c">
                                                                <a>7000 C</a>
                                                            </Link>
                                                            <Link href="/maquinas/logmax/7000xt">
                                                                <a>7000 XT</a>
                                                            </Link>
                                                            <Link href="/maquinas/logmax/e6">
                                                                <a>E6</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>



                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"><a className={css.border}>Quadco</a></Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>
                                                    <div style={{float: 'right'}}>
                                                    <div style={{width: 150,}} className={css.dropdowncontent2}>

                                                        <div>
                                                            {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                                Caterpillar
                                                            </div> */}
                                                            <Link className={css.nomemaq} href="/maquinas/quadco/18c">
                                                                <a>
                                                                    18 C
                                                                </a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/quadco/22c">
                                                                <a>
                                                                    22 C
                                                                </a>
                                                            </Link>
                                                            <Link href="/maquinas/quadco/22sc">
                                                                <a>22 SC</a>
                                                            </Link>
                                                            <Link href="/maquinas/quadco/24c">
                                                                <a>24 C</a>
                                                            </Link>
                                                            <Link href="/maquinas/quadco/27sc">
                                                                <a>27 SC</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"><a className={css.border}>Weiler</a></Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>
                                                    <div style={{float: 'right'}}>
                                                        <div style={{width: 150, }} className={css.dropdowncontent2}>
                                                            <div className={css.dropdown4}>
                                                                <button className={css.dropbtn4}>
                                                                    <Link href="/maquinas">
                                                                        <a>
                                                                          Exemplo1
                                                                        </a>
                                                                    </Link>
                                                                </button>
                                                                <div className={css.dropdowncontent4}>
                                                                   <div>
                                                                       aaaaa
                                                                   </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={css.dropdown4}>
                                                                <button className={css.dropbtn4}>
                                                                    <Link href="/maquinas">
                                                                        <a>
                                                                            Exemplo2
                                                                        </a>
                                                                    </Link>
                                                                </button>
                                                                <div className={css.dropdowncontent4}>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"><a className={css.border}>LogSet</a></Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>
                                                    <div style={{float: 'right'}}>
                                                        <div style={{width: 150, }} className={css.dropdowncontent2}>
                                                            <div className={css.dropdown4}>
                                                                <button className={css.dropbtn4}>
                                                                    <Link href="/maquinas">
                                                                        <a>
                                                                            Exemplo1
                                                                        </a>
                                                                    </Link>
                                                                </button>
                                                                <div className={css.dropdowncontent4}>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={css.dropdown4}>
                                                                <button className={css.dropbtn4}>
                                                                    <Link href="/maquinas">
                                                                        <a>
                                                                            Exemplo2
                                                                        </a>
                                                                    </Link>
                                                                </button>
                                                                <div className={css.dropdowncontent4}>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                    <div>
                                                                        aaaaa
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/sobrenos" className={css.textheader}>
                                        <a className={css.linkmenu}>SOBRE A PESA FOREST</a>
                                    </Link>
                                    <Link href="/contato" className={css.textheader}>
                                        <a className={css.linkmenu}>CONTATO</a>
                                    </Link>
                                </div>
                            </Col>
                            <Col md="2">
                                {/*Botão header Entre em contato*/}
                                <div>
                                <Link href="https://api.whatsapp.com/send?phone=554121032211&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PESA%20Forest%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"className={css.linkbotao}>
                                <a target="_blank"  className={css.botaoctt}>
                                <Image  src="/whatsapp.png" alt="logo" width={15} height={15}/>
                                ‏‏‎ ‎‏‏‎ ‎(41) 2103-2211
                                </a>
                                </Link>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
            </div>
        </div>
    )

}
