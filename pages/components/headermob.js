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
                    <li className={css.li}>
                        <Link className={css.a} to="/"><a>inicio</a></Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} to="/maquinasmob">
                            <a>máquinas</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} to="/sobrenos">
                            <a>sobre a pesa forest</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} to="/contato">
                            <a>contato</a>
                        </Link>
                    </li>
                    <Link href="#">
                        <a>
                            Entrar em Contato
                        </a>
                    </Link>
                </ul>
            </div>
        </nav>
    )

}
