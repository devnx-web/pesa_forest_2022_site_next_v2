import css from './formulario.module.css'
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export default function Formulario() {

    return(
        <div className={css.bgbanner}>
            <Container>
                <div>
                    <h3 className={css.subtt}>PREENCHA O FORMULÁRIO</h3>
                    <h3 className={css.titulofale}>FALE COM A PESA FOREST</h3>
                    <div className={css.border}></div>
                </div>
                <div>
                    <Row>
                        <Col md="4">
                            <div className={css.cardform}>
                             <div>
                                 <h4 className={css.tituloform}>FALE COM A GENTE!</h4>
                             </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>NOME</label>
                                    </div>
                                    <input className={css.inputform} type="text" placeholder="Ex: Matheus Sartori"/>
                                </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>E-MAIL</label>
                                    </div>
                                    <input className={css.inputform} type="text" placeholder="Ex: matheus@gmail.com"/>
                                </div>
                                <div>
                                    <div>
                                        <label className={css.nomelabel}>MENSAGEM</label>
                                    </div>
                                    <input className={css.inputform} type="text" placeholder="Ex: Olá"/>
                                </div>
                                <div>
                                    <label className={css.nomelabel}>SEGMENTOS</label>
                                    <select className={css.inputform}>
                                        <option className={css.selectoption} value="1">Agricultura</option>
                                        <option className={css.selectoption} value="1">Mineração</option>
                                        <option className={css.selectoption} value="1">Construção</option>
                                        <option className={css.selectoption} value="1">Terraplanagem</option>
                                        <option className={css.selectoption} value="1">Pedreiras e agregados</option>
                                        <option className={css.selectoption} value="1">Serviços</option>
                                        <option className={css.selectoption} value="1">Pavimentação</option>
                                    </select>
                                </div>
                                <div className={css.align}>
                                    <input type="checkbox"/>
                                    <div>
                                         <p className={css.textocheck}>
                                            *De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, autorizo PESA CAT a enviar notificações de meu interesse por e-mail ou outros meios.
                                         </p>
                                    </div>
                                </div>
                                <div>
                                    <div className={css.botaoform}>
                                        <span>ENVIAR MENSAGEM</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <iframe className={css.videoform} width="100%" height="540" src="https://www.youtube.com/embed/VpDZUTQLiWI"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )

}
