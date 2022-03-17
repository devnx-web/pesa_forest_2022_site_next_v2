import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
// import css from "../../../../../components/header.module.css";


export default function Mobile(){
    return(
        <div>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>PTH 18</h1>
                    <h1 className={'ttmaq1'}>PTH 18</h1>
                    <div>
                        <p className={'textomob'}>
                            Lorem Ipsum dolor sit amet
                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/5hp-gt.png" alt="maquina" width={450} height={350} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla id nisl a hendrerit. Suspendisse maximus euismod nulla ac ultricies. Aliquam libero dui, mollis sit amet blandit a, tincidunt in ipsum. Phasellus eu risus velit. Cras faucibus ipsum dui, sit amet ultricies augue rutrum in. Quisque maximus lacus quam, non blandit mauris faucibus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque ac urna pharetra fringilla.
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
