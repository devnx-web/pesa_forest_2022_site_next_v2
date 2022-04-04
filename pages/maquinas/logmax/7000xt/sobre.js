import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../components/detalhesmaquinaresponsive";
import Maqpth18mob from "../../../home/maqpth18mob";


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
                                    <h2 className={css.ttmaq2}>7000 XT</h2>
                                    <h2 className={css.ttmaq1}>7000 XT</h2>
                                    <h3 className={css.destaque}>O que torna o 7000XT sua melhor escolha?</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        A linha extreme conta com o link em ferro fundido, chassis mais robusto, além de reforços e proteções que aportam estabilidade e durabilidade na estrutura do cabeçote, é a ferramenta ideal para os ambientes mais agressivos.
                                        <br/>
                                        O Log Max 7000XT está equipado com uma serra topo. Ter uma serra em ambas as extremidades do cabeçote torna mais fácil trabalhar com ramificações pesadas árvores de folhas largas, seja no corte ou no processamento, além de reduzir perdas.
                                        </p>
                                    </div>
                                    <div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
                                    </div>
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
                                    <h2 className={css.ttmaq2}>7000 XT</h2>
                                    <h2 className={css.ttmaq1}>7000 XT</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        A linha extreme conta com o link em ferro fundido, chassis mais robusto, além de reforços e proteções que aportam estabilidade e durabilidade na estrutura do cabeçote, é a ferramenta ideal para os ambientes mais agressivos.
                                        <br/>
                                        O Log Max 7000XT está equipado com uma serra topo. Ter uma serra em ambas as extremidades do cabeçote torna mais fácil trabalhar com ramificações pesadas árvores de folhas largas, seja no corte ou no processamento, além de reduzir perdas.                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/maquinas/7000xt.png" alt="logo" width={400} height={280} />
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
