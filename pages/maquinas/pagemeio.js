import css from './pagemeio.module.css'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CollapseLogmax from "../../components/CollapseLogmax.tsx";
import CollapseLogset from "../../components/CollapseLogset.tsx";
import CollapseWeiler from "../../components/CollapseWeiler.tsx";
import CollapseQuadco from "../../components/CollapseQuadco.tsx";
import CollapseCaterpillar from "../../components/CollapseCaterpillar.tsx";


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
                slidesToShow: 3,
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
            </Container>

<div className={css.ocultamob}>
            <Container>
                <Row>
                    <Slider {...settings}>
                        <div className={css.slide}>
                            <div className={css.bgslide}>
                                    <h4 className={css.subtt}>MÁQUINAS</h4>
                                    <h4 className={css.ttcard}>Cartepillar</h4>
                                    <Image className={css.imgmaq} src="/maquinas/pth20-harvester.png" alt="logo" width={300} height={180} />
                                    <p className={css.textocard}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                    </p>
                                    <CollapseCaterpillar/>
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
                                <CollapseLogmax/>
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
                                <CollapseLogset/>
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
                                <CollapseWeiler/>
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
                                <CollapseQuadco/>
                            </div>
                        </div>
                    </Slider>
                </Row>
            </Container>
            </div>

            <div className={css.ocultadesk}>
                <Container>
            <div className={css.slide}>
                            <div className={css.bgslide}>
                                    <h4 className={css.subtt}>MÁQUINAS</h4>
                                    <h4 className={css.ttcard}>Cartepillar</h4>
                                    <Image className={css.imgmaq} src="/maquinas/pth20-harvester.png" alt="logo" width={300} height={180} />
                                    <p className={css.textocard}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                    </p>
                                    <CollapseCaterpillar/>
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
                                <CollapseLogmax/>
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
                                <CollapseLogset/>
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
                                <CollapseWeiler/>
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
                                <CollapseQuadco/>
                            </div>
                        </div>
                        </Container>
            </div>
        </div>
    )
}
