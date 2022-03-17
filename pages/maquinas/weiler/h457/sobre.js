import style from './sobre.module.css'
import css from './sobre.module.css'
import React, {useState} from "react";
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';


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
                                    <h2 className={css.ttmaq2}>H 457</h2>
                                    <h2 className={css.ttmaq1}>H 457</h2>
                                    <h3 className={css.destaque}>Lorem Ipsum dolor sit amet</h3>
                                    <div>
                                        <p className={css.textomaq}>
                                            Lorem ipsum dolor sit amet. Qui dolorem enim aut omnis suscipit et dolores laudantium et enim dicta. Est maiores commodi et aliquid dolor sed autem officia non tempora quae qui placeat molestiae et perferendis iure quo nobis soluta!

                                            Qui eveniet quia eum repudiandae dignissimos ut eaque laborum qui asperiores iste eos laudantium corporis in assumenda fuga nam fugit veniam. Et autem iure ad sunt magni non laudantium dolores qui quam enim qui accusantium doloribus est dolore dolor.                                        </p>
                                    </div>
                                    <div className={css.botaosaber}>
                                        FAZER DOWNLOAD CATÁLOGO
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
