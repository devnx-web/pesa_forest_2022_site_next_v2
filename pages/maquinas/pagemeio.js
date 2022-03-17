import css from './pagemeio.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';


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
                <div style={{paddingLeft: 220, paddingRight: 220}}>
                    <Row>
                        <Col xs="12" sm="12" md="6">
                            <div className={css.cardpage}>
                               <div>
                                   <h4 className={css.subtt}>MÁQUINAS</h4>
                                   <h4 className={css.ttcard}>Cartepillar</h4>
                                   <div className={'imgposi'}>
                            <Image src="/maquinas/pth20-harvester.png" alt="maquina" width={500} height={400} />
                        </div>
                               </div>
                                <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>
                                <div>
                                    <select className={css.select}>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <div className={css.cardpage}>
                                <div>
                                    <h4 className={css.subtt}>CABEÇOTES</h4>
                                    <h4 className={css.ttcard}>Log Max</h4>
                                </div>
                                <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>
                                <div>
                                    <select className={css.select}>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="12" md="6">
                            <div className={css.cardpage}>
                                <div>
                                    <h4 className={css.subtt}>MÁQUINAS</h4>
                                    <h4 className={css.ttcard}>LOGSET</h4>
                                    <div className={'imgposi'}>
                            <Image src="/maquinas/5f-gt-transparente.png" alt="maquina" width={500} height={400} />
                        </div>
                                </div>
                                <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>
                                <div>
                                    <select className={css.select}>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6">
                            <div className={css.cardpage}>
                                <div>
                                    <h4 className={css.subtt}>MÁQUINAS</h4>
                                    <h4 className={css.ttcard}>WEILER</h4>
                                    <div className={'imgposi'}>
                            <Image src="/maquinas/b458.png" alt="maquina" width={500} height={400} />
                        </div>
                                </div>
                                <p className={css.textocard}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus odio nisi, eu venenatis metus tincidunt nec. Duis eu dolor tincidunt eros gravida malesuada eu ac elit. Donec eu leo scelerisque, tristique ligula a, fringilla dolor.
                                </p>
                                <div>
                                    <select className={css.select}>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                        <option className={css.selectoption} value="1">Ver modelos</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
