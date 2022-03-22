import css from './pagemeio.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
};
export default function Pagemeio(){
    return(
        <div className={css.bgpage}>
            <Container>
                <div>
                   <h2 className={css.ttmaq2}>PESA FOREST</h2>
                   <h2 className={css.ttmaq1}> Versatilidade e produtividade para a <br></br>sua operação florestal.</h2>
                </div>
                <div>
                    <p className={css.textopage}>
                    A agilidade e eficiência de marcas referência no setor florestal.  Solicite atendimento <br/> através de nosso formulário de contato!                    </p>
                </div>

                <div style={{paddingLeft: 220, paddingRight: 220}}>
                    <Row>
                        <Col xs="12" sm="12" md="6">
                            
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container>
                <Row>
                    <Slider {...settings}>
                        <div className={css.slide}>
                            <div className={css.bgslide}>
                                    <h4 className={css.subtt}>MÁQUINAS</h4>
                                    <h4 className={css.ttcard}>Cartepillar</h4>
                                    <Image src="/maquinas/pth20-harvester.png" alt="logo" width={300} height={180} />
                                    <p className={css.textocard}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                    </p>

                                    <div>
                                        <div className={css.dropdown}>
                                            <div>
                                                <div>
                                                    <Row>
                                                        <button className={css.dropbtn}>
                                                        VER MODELOS
                                                        <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                                        </button>
                                                    </Row>
                                                    <div className={css.dropdown2}>
                                                    <button className={css.dropbtn2}>
                                                       
                                                    </button>
                                                    <div style={{float: 'center'}}>
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
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                        <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>CABEÇOTES</h4>
                                   <h4 className={css.ttcard}>Logmax</h4>
                            <Image src="/maquinas/peca-logmax.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>

                                <div>
                                    <div className={css.dropdown}>
                                        <Row>
                                            <button className={css.dropbtn}>
                                                VER MODELOS
                                                <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                            </button>
                                        </Row>
                                        <div className={css.dropdown2}>
                                                    <button style={{ marginTop: 0, }} className={css.dropbtn2}>
                                                    </button>
                                                    <div>
                                                    <div style={{width: 270,}} className={css.dropdowncontent2}>
                                                        {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                            Weiler
                                                        </div> */}
                                                        <div className="d-flex align-items-center">
                                                            <Link className={css.nomemaq} href="/maquinas/logmax/5000d">
                                                                <a>
                                                                    5000D
                                                                </a>
                                                            </Link>
                                                            <Link className={css.nomemaq} href="/maquinas/logmax/6000v">
                                                                <a>
                                                                    6000V
                                                                </a>
                                                            </Link>
                                                            <Link href="/maquinas/logmax/7000c">
                                                                <a>7000C</a>
                                                            </Link>
                                                            <Link href="/maquinas/logmax/7000xt">
                                                                <a>7000XT</a>
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex align-items-center">
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
                        </div>
                        <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>MÁQUINAS</h4>
                                   <h4 className={css.ttcard}>Logset</h4>
                            <Image src="/maquinas/5f-gt-transparente.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>

                                <div>
                                    <div className={css.dropdown}>
                                        <Row>
                                            <button className={css.dropbtn}>
                                                VER MODELOS
                                                <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                            </button>
                                        </Row>
                                        <div className={css.dropdown2}>
                                                    <button  className={css.dropbtn2}>
                                                        
                                                       
                                                    </button>
                                                    <div>
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
                                                                <Link className={css.nomemaq} href="/maquinas/logset/8hblack">
                                                                    <a>8H GTE BLACK</a>
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

                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                        
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>MÁQUINAS</h4>
                                   <h4 className={css.ttcard}>Weiler</h4>
                            <Image src="/maquinas/b458.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>

                                <div>
                                    <div className={css.dropdown}>
                                        <Row>
                                            <button className={css.dropbtn}>
                                                VER MODELOS
                                                <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                            </button>
                                        </Row>
                                        <div className={css.dropdown2}>
                                                    <button style={{ marginTop: 0, }} className={css.dropbtn2}>
                                                        
                                                    </button>
                                                    <div>
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
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b670a">
                                                                        <a>B 670A</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b757">
                                                                        <a>B 757</a>
                                                                    </Link>
                                                                    
                                                                    
                                                                </div>
                                                        <div className="d-flex align-items-center">
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/b758">
                                                                        <a>B 758</a>
                                                                    </Link>
                                                                    <Link className={css.nomemaq} href="/maquinas/weiler/h157">
                                                                        <a>H 157</a>
                                                                    </Link>
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/h457">
                                                                        <a>H 457</a>
                                                                    </Link>
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/h458">
                                                                        <a>H 458</a>
                                                                    </Link>
                                                                
                                                        </div>
                                                        <div className="d-flex align-items-center">
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
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                        <Link className={css.nomemaq} href="/maquinas/weiler/m860">
                                                                    <a>M 860</a>
                                                                </Link>
                                                                <Link className={css.nomemaq} href="/maquinas/weiler/s550">
                                                                    <a>F 848</a>
                                                                </Link>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>PEÇAS</h4>
                                   <h4 className={css.ttcard}>Quadco</h4>
                            <Image src="/maquinas/quadco-22c.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>

                                <div>
                                    <div className={css.dropdown}>
                                        <Row>
                                            <button className={css.dropbtn}>
                                                VER MODELOS
                                                <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                            </button>
                                        </Row>
                                        <div className={css.dropdown2}>
                                                    <button style={{ marginTop: 0, }} className={css.dropbtn2}>
                                                    </button>
                                                    <div>
                                                    <div style={{width: 270,}} className={css.dropdowncontent2}>
                                                        {/* <div style={{marginLeft: 5,}} className="p-2 pb-0 fs-5">
                                                            Weiler
                                                        </div> */}
                                                        <div className="d-flex align-items-center">
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
                                </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}
