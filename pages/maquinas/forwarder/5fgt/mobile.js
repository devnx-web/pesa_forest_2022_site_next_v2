import React from "react";
import { Container, Row, Col } from 'reactstrap'
import Image from "next/image";


export default function Mobile() {
    return (
        <div>
            <div className={'bgmobile'}>
                <Container>
                    <div>
                        <h1 className={'ttmaq2'}>5F GT</h1>
                        <h1 className={'ttmaq1'}>5F GT</h1>
                        <div>
                            <p className={'textomob'}>
                                Lorem Ipsum dolor sit amet
                            </p>
                            <div className={'imgposi'}>
                                <Image src="/maquinas/5f-gt-transparente.png" alt="maquina" width={450} height={350} />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div className={'desc'}>
                <Container>
                    <p className={'textodesc'}>
                        Lorem ipsum dolor sit amet. Aut galisum nihil qui iusto consectetur ea eligendi blanditiis. Et dolor officiis sed esse omnis sit sapiente voluptates aut voluptate sequi sed molestiae esse vel magni odio.

                        Qui quia minus et porro blanditiis et adipisci praesentium. Qui dolorum quia sed odit deleniti sit reiciendis magnam in sunt nesciunt ut odit enim ut dolorem iure vel praesentium voluptatem.
                    </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
