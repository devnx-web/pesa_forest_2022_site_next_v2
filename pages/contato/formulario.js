import css from './formulario.module.css'
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ContactForm from "../components/contatoForm"
import Link from "next/link"

export default function Formulario() {

    return (
        <div className={css.bgform}>
            <Container>
                <div>
                    <h2 className={css.ttmaq2}>ENTRE EM CONTATO</h2>
                    <h2 className={css.ttmaq1}>ENTRE EM CONTATO</h2>
                </div>
                <p className={css.textocontato}>
                    Para entrar em contato conosco, basta preencher o formulário abaixo!<br/> Nossa equipe está pronta para
                    te atender!
                </p>

                <Row>
                <Col md={4} className={css.cardEndereco}>
                <div className={css.titulo}>
                    Sede Curitiba
                </div>
                <div className={css.informacoes}>
                    <Link href="https://goo.gl/maps/ANTfXrWJchTpFdJ96"><a className={css.link} target="_blank">Rodovia BR - 116, 11807<br/>
                    Hauer<br/>
                    CEP 81690 - 100<br/>
                    Curitiba - PR<br/></a></Link>
                    <Link href="https://api.whatsapp.com/send?phone=554121032211&text=Ol%C3%A1!%20VIm%20pelo%20site%20da%20PESA%20Forest%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"><a className={css.link} target="_blank">+55 (41) 2103 - 2211</a></Link>
                </div>
                </Col>

                <Col md={4} className={css.cardEndereco}>
                <div className={css.titulo}>
                    Sede Lages
                </div>
                <div className={css.informacoes}>
                    <Link href="https://goo.gl/maps/cmDEjxYVCHEetNsB9"><a className={css.link} target="_blank" >Marginal da BR - 282<br/>
                    Bairro São Paulo<br/>
                    CEP 88506 - 535<br/>
                    Lages - SC<br/></a></Link>
                    <Link href="tel:554191751789"><a className={css.link} target="_blank">+55 (49) 9175 - 1789</a></Link>
                </div>
                </Col>
                </Row>
                
            </Container>
            <ContactForm />
        </div>
    )
}
