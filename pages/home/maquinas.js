import css from './maquinas.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Maquinas() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5500,
        speed: 500,
        slidesToShow: 2,
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
    return(
        <div className={css.bgmaq}>
            <Container>
                <div className={'pb-2 pb-md-0'}>
                   <h2 className={css.ttmaq}>MÁQUINAS</h2>
                </div>
                <Row>
                    <Col md="6">
                        <div>
                            <Slider {...settings}>
                                <div style={{ width: 250 }}>
                                  <div className={css.bgslide}>
                                    <div className={css.position}>
                                        <h3 className={css.nomemaq}>PTL 20</h3>
                                        <div className={css.botaoler}>LER MAIS</div>
                                    </div>
                                  </div>
                                </div>
                                <div style={{ width: 250 }}>
                                    <div className={css.bgslide2}>
                                        <div className={css.position}>
                                            <h3 className={css.nomemaq}>PTH 18</h3>
                                            <div className={css.botaoler}>LER MAIS</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: 250 }}>
                                    <div className={css.bgslide3}>
                                        <div className={css.position}>
                                            <h3 className={css.nomemaq}>B 757</h3>
                                            <div className={css.botaoler}>LER MAIS</div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Col>

                    <Col>
                        <div className={'pt-4 pt-md-0'}>
                            <h3 className={css.subconhe}>CONHEÇA SOBRE</h3>
                            <h2 className={css.ttnossa2}>NOSSA HISTÓRIA</h2>
                            <h2 className={css.ttnossa1}>NOSSA HISTÓRIA</h2>
                            <div className={css.borda}></div>
                            <div>
                                <p className={css.textohistoria}>
                                    Oferecemos uma linha completa de equipamentos florestais para atender às necessidades de sua aplicação – das principais máquinas que auxiliam na construção de estradas, em serrarias e reflorestamento, até máquinas criadas para fins específicos, que colhem, extraem e carregam, a linha de produtos da PESA® Forest é tudo o que você precisa para terminar o trabalho.
                                </p>
                            </div>
                            <div>
                              <div className={css.botaosaber}>
                                  <a className={css.link} href="/sobrenos">SABER MAIS</a>
                              </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
