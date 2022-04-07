import PrimeiraSessao from "./primeiraSessao";
import Banner from './banner'
import Mobile from "./mobile";


function Maquina({ data }) {

    if (data.error) {
        return <MaquinaNaoEncontrada />
    }

    return (
        <div>
            <Banner  
                banner={data.maquina_banner}
                titulo={data.maquina_titulo}
                descricao={data.maquina_descricao}

            />
            <PrimeiraSessao  
                imgPrincipal={data.s1_imgPrincipal}
                titulo={data.s1_titulo}
                fraseDestaque={data.s1_fraseDestaque}
                textoDescricao={data.s1_textoDescricao}
                downloadCatalogo={data.s1_downCatalogo}
            /> 
            <Mobile 
                imgPrincipal={data.s1_imgPrincipal}
                titulo={data.s1_titulo}
                fraseDestaque={data.s1_fraseDestaque}
                textoDescricao={data.s1_textoDescricao}
                downloadCatalogo={data.s1_downCatalogo}
            />
        </div>
    )
}

const MaquinaNaoEncontrada = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div> Maquina não encontrada </div>
        </div>
    )
}
// This gets called on every request
export async function getServerSideProps(context) {
    const res = await fetch(`http://phpstack-666249-2511573.cloudwaysapps.com/api/pesaforest/page/${context.params.maquinaId}`)
    const data = await res.json()

    return { props: { data } }
}

export default Maquina