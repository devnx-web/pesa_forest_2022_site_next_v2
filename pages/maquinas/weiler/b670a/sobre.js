import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link"


export default function Sobre(){
    const [tab, setTab] = useState('RESUMO')
    return(
        <div className={style.bgsobre}>
            <Container className={'pt-5 pb-5'}>
                <div className={css.ocultamob}>
                    <div className={css.s250}>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>B 670A</h2>
                                    <h2 className={css.ttmaq1}>B 670A</h2>
                                    <h3 className={css.destaque}>Lorem Ipsum dolor sit amet</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        São os mais inovadores do mercado e proporcionam maior produtividade e grande eficiência de consumo de combustível. Incluindo o Sistema PowerDirect Plus e o Motor de Montagem Transversal combinado com um sistema hidráulico avançado multifuncional.                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/b670a-spec-sheet-3.pdf"><a target="_blank"><div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
                                    </div></a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    )
}
