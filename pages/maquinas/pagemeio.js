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
    autoplay: false,
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
                                                    <Row>
                                                        <button className={css.dropbtn}>
                                                        VER MODELOS
                                                        <Image className={css.image} src="/down.svg" alt="logo" width={20} height={20} />
                                                        </button>
                                                    </Row>
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
