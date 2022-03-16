import css from './destaques.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

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
                    <button className={css.button}>Saiba Mais</button>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina2}></div>
                        <div className={css.name}>PTH 18</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <button className={css.button}>Saiba Mais</button>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina3}></div>
                        <div className={css.name}>PTH 18</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <button className={css.button}>Saiba Mais</button>
                    </div>
                </Col>

                <Col>
                    <div className={css.bgmaquina}>
                        <div className={css.maquina4}></div>
                        <div className={css.name}>PTH 18</div>
                        <div className={css.textomaq}>Lorem ipsum dolor sit amet. Et dolorem dolores ea quia laudantium est empora ipsam rem quia minus.</div>

                        <button className={css.button}>Saiba Mais</button>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
