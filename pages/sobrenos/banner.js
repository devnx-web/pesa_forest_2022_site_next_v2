import css from './banner.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';


export default function Banner(){
    return(
        <div className={css.bgbanner}>
            <Container>
                <div className={css.posicaott}>
                    <h1 className={css.titulo1}>Sobre Nós</h1>
                    <h1 className={css.titulo2}>Sobre Nós</h1>
                    <p className={css.texto}>Lorem Ipsum dolor sit amet</p>
                </div>
            </Container>
        </div>
    )
}
