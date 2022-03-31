import React from "react";
import css from "./headermob.module.css";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Link from "next/link";
import Image from "next/image";


export default function Headermob() {

    return (
        
            <Row>
            <Col sm={2}>
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
                        <Link href="/">
                            <a className={css.a}>
                                inicio
                            </a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link href="/maquinasmob">
                            <a className={css.a}>
                                máquinas
                            </a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link href="/sobrenos">
                            <a className={css.a}>
                                sobre a pesa forest
                            </a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link href="/contato">
                            <a className={css.a}>
                                contato
                            </a>
                        </Link>
                    </li>
                    Entrar em Contato
                </ul>
            </div>
            </nav>
            </Col>
            <Col sm={10}>
            <Image className={css.image} src="/logo.jpg" alt="logo" width={160} height={42} />
            </Col>
            </Row>
        
    )

}
