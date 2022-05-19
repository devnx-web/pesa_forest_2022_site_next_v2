import css from './pagemeio.module.css'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactform from "../components/contatoForm"
import Slider from "react-slick";
import CollapseLogmax from "../../components/CollapseLogmax.tsx";
import CollapseLogset from "../../components/CollapseLogset.tsx";
import CollapseWeiler from "../../components/CollapseWeiler.tsx";
import CollapseQuadco from "../../components/CollapseQuadco.tsx";
import CollapseCaterpillar from "../../components/CollapseCaterpillar.tsx";


const settings = {
    dots: true,
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
                    A agilidade e eficiência de marcas referência no setor florestal.  Solicite atendimento <br/> através de nosso formulário de contato! </p>
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
                                    A Caterpillar atua em todos os continentes, principalmente em três segmentos principais: Setores de Construção, Setores de Recursos e Energia e Transporte, além de fornecer financiamento e serviços relacionados por meio do seu segmento de Produtos Financeiros. <br/><br/>
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
                            O projeto e as atualizações dos cabeçotes Log Max sempre prezam sua multi-aplicabilidade.
Desde seu primeiro projeto, em 1980, a Log Max sempre prezou pela sua aplicação multi-marcas, e assim seguimos até os dias atuais, isso torna os nossos produtos a escolha que irá otimizar a operação, ao menor custo de madeira produzida.
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
                            Logset produz soluções CTL. A gama de máquinas logset contém sete forwarders, sete harversters e sete cabeçotes de colheita florestal diferentes. Todos os produtos são fabricados na fábrica da empresa. A rede de distribuição da logset abrange 21 países, e as máquinas logset trabalham em mais de 25 países.
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
                            São os mais inovadores do mercado e proporcionam maior produtividade e grande eficiência de consumo de combustível. Incluindo o Sistema PowerDirect Plus e o Motor de Montagem Transversal combinado com um sistema hidráulico avançado multifuncional.<br/><br/>
                                </p>
                                <CollapseWeiler/>
                                </div>
                            </div>

                        <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>PEÇAS</h4>
                                   <h4 className={css.ttcard}>Quadco</h4>
                            <Image src="/maquinas/quadco-22C.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                            Os modelos C permitem melhor alavancagem ao manusear madeira alta com torre estendida e acumulação mais rápida. Eles apresentam braços fundidos mais fortes e duráveis com contornos para suporte máximo ao acumular, bem como um acionamento de disco ultra-confiável com rolamentos facilmente ajustáveis.
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
                                    A Caterpillar atua em todos os continentes, principalmente em três segmentos principais: Setores de Construção, Setores de Recursos e Energia e Transporte, além de fornecer financiamento e serviços relacionados por meio do seu segmento de Produtos Financeiros. 
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
                            O projeto e as atualizações dos cabeçotes Log Max sempre prezam sua multi-aplicabilidade.
Desde seu primeiro projeto, em 1980, a Log Max sempre prezou pela sua aplicação multi-marcas, e assim seguimos até os dias atuais, isso torna os nossos produtos a escolha que irá otimizar a operação, ao menor custo de madeira produzida.
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
                            Logset produz soluções CTL. A gama de máquinas logset contém sete forwarders, sete harversters e sete cabeçotes de colheita florestal diferentes. Todos os produtos são fabricados na fábrica da empresa. A rede de distribuição da logset abrange 21 países, e as máquinas logset trabalham em mais de 25 países.
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
                            São os mais inovadores do mercado e proporcionam maior produtividade e grande eficiência de consumo de combustível. Incluindo o Sistema PowerDirect Plus e o Motor de Montagem Transversal combinado com um sistema hidráulico avançado multifuncional.
                                </p>
                                <CollapseWeiler/>
                                </div>
                            </div>

                            <div className={css.slide}>
                            <div className={css.bgslide}>
                            <h4 className={css.subtt}>PEÇAS</h4>
                                   <h4 className={css.ttcard}>Quadco</h4>
                                   <Image src="/maquinas/quadco-18c.png" alt="logo" width={300} height={180} />
                            <p className={css.textocard}>
                            Os modelos C permitem melhor alavancagem ao manusear madeira alta com torre estendida e acumulação mais rápida. Eles apresentam braços fundidos mais fortes e duráveis com contornos para suporte máximo ao acumular, bem como um acionamento de disco ultra-confiável com rolamentos facilmente ajustáveis.
                                </p>
                                <CollapseQuadco/>
                            </div>
                            <div className={css.backgroundform}>
                            <div>
                    <h2 className={css.ttmaq2}>ENTRE EM CONTATO</h2>
                    <h2 className={css.ttmaq1}>ENTRE EM CONTATO</h2>
                </div>
                <p className={css.textocontato}>
                    Para entrar em contato conosco, basta preencher o formulário abaixo!<br/> Nossa equipe está pronta para
                    te atender!
                </p>
                            <Contactform/>
                        </div>
                        </div>
                        </Container>
            </div>
        </div>
    )
}
