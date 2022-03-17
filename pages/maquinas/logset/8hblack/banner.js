import css from './banner.module.css'
import React from "react";
import { Container } from 'reactstrap';

export default function Banner() {
    return (
        <div className={css.bgbanner}>
            <Container>
                <div>
                    <div className={css.posicaott}>
                        <h1 className={css.tt2}>8H GTE BLACK</h1>
                        <h1 className={css.tt1}>8H GTE BLACK</h1>
                        <h1 className={css.texto}>Lorem Ipsum dolor sit amet</h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}
