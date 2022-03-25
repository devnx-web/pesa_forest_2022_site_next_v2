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
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
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
                                                    <button style={{ margin: 0, marginBottom: 15, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"><a className={css.border}>LogSet</a></Link>
                                                        {/* <Image className={css.image} src="/arrowright.svg" alt="logo" width={15} height={15} /> */}
                                                    </button>
                                                    <div style={{float: 'right'}}>
                                                    <div className={css.dropdowncontent3}>
                                                        {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                            LogSet
                                                        </div> */}
                                                        <div className="d-flex align-items-center">
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
                                                      </div>
                                                        <div className="d-flex align-items-center">
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
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <Link className={css.nomemaq} href="/maquinas/logset/8hgt">
                                                                <a>8H GT</a>
                                                            </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hgte">
                                                                    <a>8H GTE</a>
                                                                </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/8hgthybrid">
                                                                <a>8H GTE Hybrid</a>
                                                            </Link>

                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <Link className={css.nomemaq} href="/maquinas/logset/10fgt">
                                                                <a>10F GT</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/12hybrid">
                                                                <a>12H GTE Hybrid</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/th45">
                                                                <a>TH 45</a>
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                        <Link className={css.nomemaq} href="/maquinas/logset/th55">
                                                                <a>TH 55</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/th65">
                                                                <a>TH 65</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/th65euca">
                                                                <a>TH 65 EUCA</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/th75">
                                                                <a>TH 75 </a>
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                        <Link className={css.nomemaq} href="/maquinas/logset/th85">
                                                                <a>TH 85</a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logset/th95">
                                                                <a>TH 95</a>
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
                                                    <div style={{width: 270,}} className={css.dropdowncontent2}>
                                                        {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                            Weiler
                                                        </div> */}
                                                        <div className="d-flex align-items-center">
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b457">
                                                                        <a>B 457</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b570">
                                                                        <a>B 570</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b670">
                                                                        <a>B 670</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b670a">
                                                                        <a>B 670A</a>
                                                                    </Link>
                                                                    
                                                                    
                                                                    
                                                                </div>
                                                        <div className="d-flex align-items-center">
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/b757">
                                                                        <a>B 757</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b758">
                                                                        <a>B 758</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h157">
                                                                        <a>H 157</a>
                                                                    </Link>
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/h457">
                                                                        <a>H 457</a>
                                                                    </Link>
                                                                
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/h458">
                                                                        <a>H 458</a>
                                                                    </Link>
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/s250">
                                                                    <a>S 250</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s350">
                                                                    <a>S 350</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s450">
                                                                    <a>S 450</a>
                                                                </Link>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/s550">
                                                                    <a>S 550</a>
                                                                </Link>
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/m860">
                                                                    <a>M 860</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/f848">
                                                                    <a>F 848</a>
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
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>

                                                <div className={css.dropdown2}>
                                                    <button style={{ marginTop: -20, }} className={css.dropbtn2}>
                                                        <Link className={css.link} href="/maquinas"> Logmax </Link>
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
    )

}
