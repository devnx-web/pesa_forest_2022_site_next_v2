import css from './formulario.module.css'
import React from 'react';
import {Container} from 'reactstrap';
import ContactForm from "../components/contatoForm"

export default function Formulario() {

    return (
        <div className={css.bgform}>
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
            <ContactForm />
        </div>
    )
}
