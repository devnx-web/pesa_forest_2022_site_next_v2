import React from "react";
import css from "./headermob.module.css";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Link from "next/link";


export default function Headermob() {
    return (
        <nav className={css.navigation}>
            <div className={css["menuToggle"] + " " + css["div"]}>
                <input className={css.input} name="toggle" type="checkbox" />
                <label className={css.label} htmlFor="toggle">
                    <span className={css.span}>menu</span>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                    <div className={css.div}></div>
                </label>
                <ul className={css["menu"] + " " + css["ul"]}>
                    <Link className={css.a} to="/">
                        <li className={css.li}>inicio</li>
                    </Link>
                    <Link className={css.a} to="/maquinasmob">
                        <li className={css.li}>máquinas</li>
                    </Link>
                    <Link className={css.a} to="/sobrenos">
                        <li className={css.li}>sobre a pesa forest</li>
                    </Link>
                    <Link className={css.a} to="/contato">
                        <li className={css.li}>contato</li>
                    </Link>
                    <Link to="#">
                        Entrar em Contato
                    </Link>
                </ul>
            </div>
        </nav>
    )

}
