import style from './sobre.module.css'
import css from '../home/maqpth18.module.css'
import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';


export default function PrimeiraSessao({ imgPrincipal, titulo, fraseDestaque, textoDescricao, downloadCatalogo }) {
    return (
        <div className={style.bgsobre}>
            <Container className={'pt-5 pb-5'}>
                <div className={css.ocultamob}>
                    <div className={css.imgmaquina} style={{ backgroundImage: `url(https://arquivos.devnx.com.br/${imgPrincipal})` }}>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>{titulo}</h2>
                                    <h2 className={css.ttmaq1}>{titulo}</h2>
                                    <h3 className={css.destaque}>{fraseDestaque}</h3>
                                    <div>
                                        <p className={css.textomaq}>{textoDescricao}</p>
                                    </div>
                                    <div className={css.botaosaber}>
                                    <Link href={`https://arquivos.devnx.com.br/${downloadCatalogo}`}>
                                        <a className={css.link} target="_blank">
                                            <div >
                                             FAZER DOWNLOAD CATÁLOGO
                                            </div>
                                        </a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    )
}
