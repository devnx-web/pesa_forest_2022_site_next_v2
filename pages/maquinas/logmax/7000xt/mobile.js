import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
import css from "../../../components/header.module.css";


export default function Mobile(){
    return(
        <div className={'ocultadesk'}>
        <div className={'bgmobile'}>
            <Container>
                <div>
                    <h1 className={'ttmaq2'}>7000 XT</h1>
                    <h1 className={'ttmaq1'}>7000 XT</h1>
                    <div>
                        <p className={'textomob'}>
                        Ambientes extremos requerem <br/>ferramentas extremas                        </p>
                        <div className={'imgposi'}>
                            <Image src="/maquinas/7000xt.png" alt="maquina" width={320} height={220} />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                A linha extreme conta com o link em ferro fundido, chassis mais robusto, além de reforços e proteções que aportam estabilidade e durabilidade na estrutura do cabeçote, é a ferramenta ideal para os ambientes mais agressivos.
                                        <br/>
                                        O Log Max 7000XT está equipado com uma serra topo. Ter uma serra em ambas as extremidades do cabeçote torna mais fácil trabalhar com ramificações pesadas árvores de folhas largas, seja no corte ou no processamento, além de reduzir perdas.   
                </p>
                    <div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div>
                </Container>
            </div>
        </div>
    )
}
