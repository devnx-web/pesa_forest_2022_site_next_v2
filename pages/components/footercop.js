import css from './footercop.module.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

export default function Footercop() {

    return (
        <div className={css.bgfootercop}>
            <Container>
                <div>
                    <h5 className={css.textocop}>PESA - PARANÁ EQUIPAMENTOS S.A. - Todos os direitos reservados - 2022</h5>
                </div>
            </Container>
        </div>
    )

}
