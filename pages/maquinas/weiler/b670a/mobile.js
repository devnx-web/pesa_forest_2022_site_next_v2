import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";
import img from "../../../../public/maquinas/b457.png"


export default function Mobile(){
    return(
        <div>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>B670 A</h1>
                    <h1 className={'ttmaq1'}>B670 A</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
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
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
