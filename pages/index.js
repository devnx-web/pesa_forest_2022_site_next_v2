import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "./home/banner";
import Maquinas from "./home/maquinas";
import Maqpth18 from "./home/maqpth18";
import Maqpth18mob from "./home/maqpth18mob";
import Operacao from "./home/operacao";
import Opinioes from "./home/opinioes";
import Formulario from "../components1/contactForm2";
import css from "./components/header.module.css";
import React from "react";
import Headermob from "../components1/headermob";
import Header from './components/header';
import Footer from './components/Footer';


export default function Home() {
  return (
  <div>
    <div>
      <Header/>
      <Banner/>
      <Maquinas/>
      <div className={css.ocultamob}>
      <Maqpth18/>
      </div>
      <div className={css.ocultadesk}>
      <Maqpth18mob/>
      </div>
      <Operacao/>
      <Opinioes/>
      <Formulario/>
      <Footer/>
    </div>
  </div>
  )
}
