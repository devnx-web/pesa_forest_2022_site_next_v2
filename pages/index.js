import Banner from "./home/banner";
import Maquinas from "./home/maquinas";
import Maqpth18 from "./home/maqpth18";
import Maqpth18mob from "./home/maqpth18mob";
import Operacao from "./home/operacao";
import Opinioes from "./home/opinioes";
import Formulario from "../components/contactForm2";
import Footercop from "./components/footercop";
import css from "./components/header.module.css";
import React from "react";


export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Maquinas />
        <div className={css.ocultamob}>
          <Maqpth18 />
        </div>
        <div className={css.ocultadesk}>
          <Maqpth18mob />
        </div>
        <Operacao />
        <Opinioes />
        <Formulario />
      </div>
    </div>
  )
}
