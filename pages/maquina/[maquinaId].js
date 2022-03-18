import PrimeiraSessao from "./primeiraSessao";
import Banner from './banner'


function Maquina({ data }) {
    console.log(data)
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
                dowloadCatalogo={data.s1_downCatalogo}
            />
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