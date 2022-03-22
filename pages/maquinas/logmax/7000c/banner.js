import css from './banner.module.css'
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';


export default function Banner(){
    return(
        <div className={css.bgbanner}>
            <Container>
                <div>
                    <div className={css.posicaott}>
                    <h1 className={css.tt2}>7000 C</h1>
                    <h1 className={css.tt1}>7000 C</h1>
                    <h1 className={css.texto}>Comprovadamente eficaz para o corte raso</h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}
