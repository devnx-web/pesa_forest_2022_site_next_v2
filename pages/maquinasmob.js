import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Headermob from "../components/headermob";
import css from './maquinasmob.module.css'
import React from "react";
import Link from "next/link";

export default function Maquinasmob() {

    return (
        <div>
            <Link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <div><Headermob /></div>
            <div className={css.bgmaquinasmob}>
                <Container>
                    <h1 className={css.titulomaq}>Selecione uma máquina</h1>
                    <div>
                        <h2 className={css.marcamaquinas}>Máquinas Caterpillar</h2>
                        <Row>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-18</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-20</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-25</h3></Link>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h2 className={css.marcamaquinas}>Máquinas Weiler</h2>
                        <Row>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>s250</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>s350</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>b757</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>m860</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>s450</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>s550</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>b758</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>b457</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>b458</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>h157</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>b570</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>b670</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>h457</h3></Link>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h2 className={css.marcamaquinas}>Máquinas LOG MAX</h2>
                        <Row>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>5000D</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>E6</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>6000V</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>7000C</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>7000XT</h3></Link>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h2 className={css.marcamaquinas}>Máquinas LOG SET</h2>
                        <Row>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>TH55</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>TH65-75</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>5HP</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>8H GTE</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>4F GT</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>8F GT</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>TH65</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>6HP GT</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>8HP GTE</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>5F GT</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>10F GT</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>TH75</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>6HP GTE</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>12H GTE</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>5FP GT</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>TH85</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>8H GT</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>6F GT</h3></Link>
                            </Col>
                        </Row>
                        <div>

                        </div>
                    </div>
                    <div>
                        <h2 className={css.marcamaquinas}>Máquinas QUADCO</h2>
                        <Row>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-18</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-18</h3></Link>
                            </Col>
                            <Col>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-18</h3></Link>
                                <Link to="#"><h3 className={css.nomemaquinas}>PTH-18</h3></Link>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        </div>
    )
}
