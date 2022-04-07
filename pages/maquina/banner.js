import css from './banner.module.css'
import React from "react";
import { Container } from 'reactstrap';


export default function Banner({ banner, titulo, descricao }) {
    return (
        <div className="ocultamob">
            <div className={css.bgbanner} style={{ backgroundImage: `url(https://arquivos.devnx.com.br/${banner})` }}>
                <Container>
                    <div className={css.posicaott}>
                      <h1 className={css.titulo1}>{titulo}</h1>
                     <h1 className={css.titulo2}>{titulo}</h1>
                     <p className={css.texto}>{descricao}</p>
                  </div>
            </Container>
             </div>
        </div>
    )
}
