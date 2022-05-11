import css from './banner.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';


export default function Banner(){
    return(
        <div className={css.bgbanner}>
            <Container>
                <div className={css.posicaott}>
                    <h1 className={css.titulo1}>Sobre a PESA Forest</h1>
                    <h1 className={css.titulo2}>Sobre a PESA Forest</h1>
                    <p className={css.texto}>A PESA Forest oferece uma linha completa de equipamentos  <br/>florestais para atender às necessidades de sua aplicação</p>
                </div>
            </Container>
        </div>
    )
}
