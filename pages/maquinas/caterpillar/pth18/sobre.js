import style from './sobre.module.css'
import css from '../../../home/maqpth18.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import Detalhesmaquinaresponsive from "../../../components/detalhesmaquinaresponsive";
import Maqpth18mob from "../../../home/maqpth18mob";


export default function Sobre(){
    const [tab, setTab] = useState('RESUMO')
    return(
        <div>
            <div className={css.ocultamob}>
        <div className={style.bgsobre}>
            <Container className={'pt-5 pb-5'}>
                <div className={css.ocultamob}>
                    <div className={css.imgmaquina}>
                        <Container>
                            <Row>
                                <Col md="5">
                                    <h2 className={css.ttmaq2}>PTH 18</h2>
                                    <h2 className={css.ttmaq1}>PTH 18</h2>
                                    <h3 className={css.destaque}>Frase destaque</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                        Focada no alto desempenho para operações florestais, a PTH 18 foi projetada pela equipe da PESA Indústria que uniu a tecnologia e robustez da marca Caterpillar com a precisão na operação. Com força hidráulica adequada e com 8,5 metros de alcance ao nível do solo, é o equipamento ideal para operações harvester. Para primeiro e segundo desbaste, bem como corte raso.
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
                                    <h2 className={css.ttmaq2}>PTH 18</h2>
                                    <h2 className={css.ttmaq1}>PTH 18</h2>
                                    <div>
                                        <p className={css.textomaq}>
                                        Focada no alto desempenho para operações florestais, a PTH 18 foi projetada pela equipe da PESA Indústria que uniu a tecnologia e robustez da marca Caterpillar com a precisão na operação. Com força hidráulica adequada e com 8,5 metros de alcance ao nível do solo, é o equipamento ideal para operações harvester. Para primeiro e segundo desbaste, bem como corte raso.
                                        </p>
                                    </div>

                                    <div className={'pb-3'}>
                                        <Image src="/pth18.png" alt="logo" width={400} height={280} />
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
        </div>
        </div>
    )
}
