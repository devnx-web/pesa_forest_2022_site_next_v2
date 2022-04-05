import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../components/detalhesmaquinaresponsive";
import Maqpth18mob from "../../../home/maqpth18mob";
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
                                    <h2 className={css.ttmaq2}>5000 D</h2>
                                    <h2 className={css.ttmaq1}>5000 D</h2>
                                    <h3 className={css.destaque}>Referência mundial em cabeçotes florestais</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        Referência mundial em cabeçotes florestais. Os cabeçotes Log são de grande versatilidade e ideias para cada tipo de operação. 
                                        </p>
                                    </div>
                                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/5000D Log Max.pdf"><a target="_blank"><div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
                                    </div></a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className={css.ocultadesk}>
                    <div>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>5000 D</h2>
                                    <h2 className={css.ttmaq1}>5000 D</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        Log Max 5000D
é o cabeçote ideal para desbastes pequenos e médios. Seu consagrado projeto para aplicação multimarcas permitem a aplicação perfeita em vários tipos e marcas de máquinas base. O peso reduzido é um fator essencial do projeto para proporcionar robustez e durabilidade.
<br/>Um Cabeçote versátil e eficiente em operações florestais de desbaste, abrange uma grande gama de aplicações com baixo peso e alta produtividade.                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/5000d.png" alt="logo" width={400} height={280} />
                                    </div>
                                    <div className={css.botaosaber}>
                                        SABER MAIS
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
