import { Container, Row, Col } from 'reactstrap'
import Image from "next/image";
import React from "react";
import css from "./headermob.module.css";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Link from "next/link";


export default function Headermob(){

    return(
        <nav className={css.navigation}>
            <div className={css["menuToggle"] + " " + css["div"]}>
                <input className={css.input} name="toggle" type="checkbox"/>
                <label className={css.label} htmlFor="toggle">
                    <span className={css.span}>menu</span>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                </label>
                <ul className={css["menu"] + " " + css["ul"]}>
                    <a className={css.a} href="/">
                        <li className={css.li}>inicio</li>
                    </a>
                    <a className={css.a} href="/maquinasmob">
                        <li className={css.li}>máquinas</li>
                    </a>
                    <a className={css.a} href="/sobrenos">
                        <li className={css.li}>sobre a pesa forest</li>
                    </a>
                    <a className={css.a} href="/contato">
                        <li className={css.li}>contato</li>
                    </a>
                    <Link href="#">
                        Entrar em Contato
                    </Link>
                </ul>
            </div>
        </nav>
    )

}
