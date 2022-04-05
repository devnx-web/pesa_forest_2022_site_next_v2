import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";
import img from "../../../../public/maquinas/b457.png"


export default function Mobile(){
    return(
        <div className={'ocultadesk'}>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>B457</h1>
                    <h1 className={'ttmaq1'}>B457</h1>
                    <div>
                        <p className={'textomob'}>
                            Orientado ao cliente. Inovação contínua.
                        </p>
                        <div className={'imgposi'}>
                            <Image src={img} alt="maquina" width={350} height={250} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    Lorem ipsum dolor sit amet. Nam voluptatum accusamus est repudiandae voluptas est aliquam saepe rem necessitatibus omnis et fuga neque. Eos voluptate aliquam et repellat provident nam neque natus et ducimus voluptate ut laudantium quam ut eaque incidunt.

                    Ab dolore reiciendis sed nihil quis aut temporibus voluptates. Cupiditate aliquid vel sequi laboriosam qui autem perspiciatis quo pariatur voluptatem id Quis adipisci qui enim molestias id magnam vitae. Sed debitis internos est omnis quidem in natus dolore
                </p>
                    <Link href="https://s3.us-central-1.wasabisys.com/arquivos.devnx.com.br/pesa/forest/catalogos/b457-spec-sheet-t4-2.pdf"><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
