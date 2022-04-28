import css from './destaques.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";

export default function Destaques(){
    return(
        <div className={css.bgpage}>
        <Container className={'pt-5 pb-5'}>
                <div className={css.title}>
                    Máquinas em Destaque
                </div>
                <div className={css.bordatt}></div>
            <Row style={{marginBottom: 35}}>
                <Col>
                    <div className={css.bgmaquina}>
                    <div className={css.maquina1}></div>
                    <div className={css.name}>PTH 18</div>
                        <div className={css.textomaq}>PESA TRACKER HARVESTER PTH-18 é uma máquina projetada para atender o Mercado Florestal, possui um cabeçote que processa as árvores individualmente.<br/><br/></div>
                     <Link href="/maquina/maquina_pth18" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina2}></div>
                        <div className={css.name}>PTL 20</div>
                        <div className={css.textomaq}>PESA TRACK LOADER PTL 20 é uma máquina fabricada no Brasil e projetada para atender o mercado florestal, possui lança reta de 5680mm e braço de 2900mm para uma maior performance no carregamento. </div>

                        <Link href="/maquina/maquina_ptl20" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina3}></div>
                        <div className={css.name}>S 550</div>
                        <div className={css.textomaq}>Proporcionam maior confiabilidade e durabilidade com transmissão Powershift e lock up, que fornece uma tração potente enquanto um sistema hidráulico multifunção forte melhora o desempenho geral.</div>

                        <Link href="/maquina/maquina_s550" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina4}></div>
                        <div className={css.name}>5FP GT</div>
                        <div className={css.textomaq}>Logset 5FP GT é um forwarder versátil. É compacto e ágil para operações de desbaste, mas tem potência suficiente para operações de corte raso. <br/><br/><br/></div>

                        <Link href="/maquina/maquina_5fpgt" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>
                
            </Row>
            <Row>
                <div>
                <Container>
                <div>
                    <h2 className={css.ttmaq2}>ENTRE EM CONTATO</h2>
                    <h2 className={css.ttmaq1}>ENTRE EM CONTATO</h2>
                </div>
                <p className={css.textocontato}>
                    Para entrar em contato conosco, basta preencher o formulário abaixo! Nossa equipe está pronta para
                    te atender!
                </p>
            </Container>
                </div>
            </Row>
        </Container>
        </div>
    )
}
