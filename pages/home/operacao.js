import css from './operacao.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export default function Operacao() {

    return(
        <div className={css.bgop}>
            <Container>
                <div className={css.upmobile}>
                    <Row>
                        <Col md="6">
                           <h3 className={css.ttprecisa}>O QUE VOCÊ PRECISA PARA A SUA</h3>
                           <h2 className={css.ttoperacao}>OPERAÇÃO</h2>
                            <p className={css.textomaq}>
                                A PTH-18 supera os competidores da sua classe de tamanho em capacidade, devido sua lança e braço serem projetados para manter as tubulações e mangueiras hidráulicas totalmente protegidas, evitando trincas e quebras de tubulação e rompimentos de mangueiras na colheita. Essa máquina proporciona alto desempenho!
                            </p>
                            <div className={css.botaoler}>
                                    <a className={css.link} href="/maquinas">LER MAIS</a>
                            </div>
                        </Col>
                        <Col>
                           <div>
                               <a href="/maquinas"> <Image className={css.image} src="/imgoperacao.png" alt="logo" width={560} height={550} /> </a>
                           </div>
                        </Col>
                    </Row>
                </div>

            </Container>

        </div>
    )

}
