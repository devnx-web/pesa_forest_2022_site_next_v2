import React from "react";
import css from "./headermob.module.css";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import Image from "next/image";


export default function Headermob() {
    return (
        <nav className={css.navigation}>
            <Row>
                <Col>
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
                        <Link className={css.a} href="/">
                            <a className={css.link}>inicio</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} href="/maquinas">
                            <a className={css.link}>produtos</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} href="/sobrenos">
                            <a className={css.link}>sobre a pesa forest</a>
                        </Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.a} href="/contato">
                            <a className={css.link}>contato</a>
                        </Link>
                    </li>
                    <Link href="#">
                        <a className={css.link}>
                            Entrar em Contato
                        </a>
                    </Link>
                </ul>
            </div>
            </Col>
            <Col>
            {/* <Image src={}/> */}
            </Col>
            </Row>
        </nav>
    )

}
