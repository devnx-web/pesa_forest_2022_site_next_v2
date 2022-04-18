import React from "react";
import { Container, Row, Col} from 'reactstrap'
import Link from "next/link";
import Image from "next/image";
// import css from "../../../components/header.module.css";


export default function Mobile({imgPrincipal,titulo,fraseDestaque,textoDescricao,downloadCatalogo} ){
    const imggg = `https://arquivos.devnx.com.br/${imgPrincipal}`
    return(
        
        <div className="ocultadesk">
        <div className={'bgmobile'}>
            <Container>
            
                <div>
                    <h1 className={'ttmaq2'}>{titulo}</h1>
                    <h1 className={'ttmaq1'}>{titulo}</h1>
                    <div>
                        <p className={'textomob'}>
                            {fraseDestaque}
                        </p>
                        
                        <div className={'imgposi'} >
                            <Image src={imggg} alt="maquina" width={350} height={250} />
                            {/* <Image src={imggg} alt="maquina" width={350} height={250} /> */}
                            {/* <div style={{ backgroundImage: `url(https://arquivos.devnx.com.br/${imgPrincipal})` }}>
                                aa
                            </div> */}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
            <div className={'desc'}>
                <Container>
                <p className={'textodesc'}>
                {textoDescricao}

                </p>
                    <Link href={`https://arquivos.devnx.com.br/${downloadCatalogo}`}><a target="_blank"><div className={'botaodw'}>
                        FAZER DOWNLOAD CATÁLOGO
                    </div></a></Link>
                </Container>
            </div>
        </div>
    )
}
