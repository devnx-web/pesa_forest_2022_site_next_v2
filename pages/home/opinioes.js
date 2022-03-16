import css from './opinioes.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Opinioes() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        variableWidth: true,
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className={css.bgpage}>
            <Container fluid>
                <div>
                   <Row>
                       <Col className={css.paddingslide} md="4">
                           <div>
                               <h2 className={css.titulopage}>Veja algumas <br/> opiniões</h2>
                           </div>
                           <div>
                               <p className={css.textoopn}>
                                   Confira o que as pessoas, clientes, funcionários ou empresários estão falando sobre a PESA® e sobre a PESA® Forest.
                               </p>
                           </div>
                       </Col>
                       <Col md="8">
                           <div>
                               <Slider {...settings}>
                                 <div style={{ width: 360 }}>
                                     <div className={css.cardopn}>
                                         <div className={css.flex}>
                                         <Image className={css.pessoa} src="/pessoaopn.jpg" alt="pessoa" width={75} height={75} />
                                         <div style={{paddingLeft: 15,}}>
                                           <h4 className={css.nome}>Joana Santos</h4>
                                             <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                             <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                             <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                             <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                             <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                           <h4 className={css.categoria}>Cliente</h4>
                                         </div>
                                         </div>
                                         <div>
                                             <p className={css.textoav}>
                                                 A empresa é uma das melhores no ramo. Atenderam minhas expectativas
                                             </p>
                                         </div>
                                     </div>
                                 </div>
                                   <div style={{ width: 360 }}>
                                       <div className={css.cardopn}>
                                           <div className={css.flex}>
                                               <Image className={css.pessoa} src="/pessoaopn.jpg" alt="pessoa" width={75} height={75} />
                                               <div style={{paddingLeft: 15,}}>
                                                   <h4 className={css.nome}>Joana Santos</h4>
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <h4 className={css.categoria}>Cliente</h4>
                                               </div>
                                           </div>
                                           <div>
                                               <p className={css.textoav}>
                                                   A empresa é uma das melhores no ramo. Atenderam minhas expectativas
                                               </p>
                                           </div>
                                       </div>
                                   </div>
                                   <div style={{ width: 360 }}>
                                       <div className={css.cardopn}>
                                           <div className={css.flex}>
                                               <Image className={css.pessoa} src="/pessoaopn.jpg" alt="pessoa" width={75} height={75} />
                                               <div style={{paddingLeft: 15,}}>
                                                   <h4 className={css.nome}>Joana Santos</h4>
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <Image src="/star.svg" alt="pessoa" width={16} height={16} />
                                                   <h4 className={css.categoria}>Cliente</h4>
                                               </div>
                                           </div>
                                           <div>
                                               <p className={css.textoav}>
                                                   A empresa é uma das melhores no ramo. Atenderam minhas expectativas
                                               </p>
                                           </div>
                                       </div>
                                   </div>

                               </Slider>
                           </div>
                       </Col>
                   </Row>
                </div>
            </Container>
        </div>
    )

}
