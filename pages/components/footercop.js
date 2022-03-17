import css from './footercop.module.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

export default function Footercop() {

    return (
        <div className={css.bgfootercop}>
            <Container>
                <div>
                    <h5 className={css.textocop}>Copyright © 2022 | PESA FOREST</h5>
                </div>
            </Container>
        </div>
    )

}
