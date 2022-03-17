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
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>
                     <Link href="/maquinas/caterpillar/pt18" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina2}></div>
                        <div className={css.name}>PTL 20</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <Link href="/maquinas/caterpillar/ptl20" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina3}></div>
                        <div className={css.name}>S 550</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <Link href="/maquinas/weiler/s550" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina4}></div>
                        <div className={css.name}>5FP GT</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <Link href="/maquinas/logset/5fpgt" ><a><button className={css.button}>Saiba Mais</button></a></Link>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
