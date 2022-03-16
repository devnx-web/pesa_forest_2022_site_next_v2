import css from './maqdestaque.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";


export default function Maqdestaque(){
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        slidesToShow: 1,
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
            {/*<Container>*/}
            {/*    <div>*/}
            {/*      <h2 className={css.ttmaq2}>MÁQUINAS EM DESTAQUE</h2>*/}
            {/*      <h2 className={css.ttmaq1}>MÁQUINAS EM DESTAQUE</h2>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Slider {...settings}>*/}
            {/*            <div>*/}
            {/*             <div className={css.bgslide}>*/}
            {/*                 <Row>*/}
            {/*                     <Col md="5">*/}
            {/*                         <div>*/}
            {/*                             <h2 className={css.nomemaq2}>PTH 18</h2>*/}
            {/*                             <h2 className={css.nomemaq1}>PTH 18</h2>*/}
            {/*                             <p className={css.textomaq}>*/}
            {/*                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor. Cras feugiat, mi ut condimentum mollis, neque felis ornare mauris, a commodo ipsum tellus vitae ligula. Mauris mollis metus at facilisis lacinia. Nullam eu suscipit lectus, nec porttitor odio. Quisque fringilla semper facilisis. Maecenas sed aliquet risus. Quisque rutrum justo vel turpis mollis efficitur. Nulla facilisi.*/}
            {/*                             </p>*/}
            {/*                             <div className={css.botaosaber}>*/}
            {/*                                 SABER MAIS*/}
            {/*                             </div>*/}
            {/*                         </div>*/}
            {/*                     </Col>*/}
            {/*                 </Row>*/}
            {/*             </div>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <div className={css.bgslide}>*/}
            {/*                    <Row>*/}
            {/*                        <Col md="5">*/}
            {/*                            <div>*/}
            {/*                                <h2 className={css.nomemaq2}>PTH 18</h2>*/}
            {/*                                <h2 className={css.nomemaq1}>PTH 18</h2>*/}
            {/*                                <p className={css.textomaq}>*/}
            {/*                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor. Cras feugiat, mi ut condimentum mollis, neque felis ornare mauris, a commodo ipsum tellus vitae ligula. Mauris mollis metus at facilisis lacinia. Nullam eu suscipit lectus, nec porttitor odio. Quisque fringilla semper facilisis. Maecenas sed aliquet risus. Quisque rutrum justo vel turpis mollis efficitur. Nulla facilisi.*/}
            {/*                                </p>*/}
            {/*                                <div className={css.botaosaber}>*/}
            {/*                                    SABER MAIS*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <div className={css.bgslide}>*/}
            {/*                    <Row>*/}
            {/*                        <Col md="5">*/}
            {/*                            <div>*/}
            {/*                                <h2 className={css.nomemaq2}>PTH 18</h2>*/}
            {/*                                <h2 className={css.nomemaq1}>PTH 18</h2>*/}
            {/*                                <p className={css.textomaq}>*/}
            {/*                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor. Cras feugiat, mi ut condimentum mollis, neque felis ornare mauris, a commodo ipsum tellus vitae ligula. Mauris mollis metus at facilisis lacinia. Nullam eu suscipit lectus, nec porttitor odio. Quisque fringilla semper facilisis. Maecenas sed aliquet risus. Quisque rutrum justo vel turpis mollis efficitur. Nulla facilisi.*/}
            {/*                                </p>*/}
            {/*                                <div className={css.botaosaber}>*/}
            {/*                                    SABER MAIS*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <div className={css.bgslide}>*/}
            {/*                    <Row>*/}
            {/*                        <Col md="5">*/}
            {/*                            <div>*/}
            {/*                                <h2 className={css.nomemaq2}>PTH 18</h2>*/}
            {/*                                <h2 className={css.nomemaq1}>PTH 18</h2>*/}
            {/*                                <p className={css.textomaq}>*/}
            {/*                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor. Cras feugiat, mi ut condimentum mollis, neque felis ornare mauris, a commodo ipsum tellus vitae ligula. Mauris mollis metus at facilisis lacinia. Nullam eu suscipit lectus, nec porttitor odio. Quisque fringilla semper facilisis. Maecenas sed aliquet risus. Quisque rutrum justo vel turpis mollis efficitur. Nulla facilisi.*/}
            {/*                                </p>*/}
            {/*                                <div className={css.botaosaber}>*/}
            {/*                                    SABER MAIS*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Slider>*/}
            {/*    </div>*/}
            {/*</Container>*/}
        </div>
    )
}
