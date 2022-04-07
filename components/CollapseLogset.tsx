import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { Col, Row } from "reactstrap";

export default function Collapse() {
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);


    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };
    return (
        <>
            <div className="App">
                <div>
                    <button
                        className={active ? `question-section` : `question-active`}
                        onClick={toggleAccordion}
                    >
                        <div>
                            <div className="question-align">
                                <h4 className="question-styling">
                                   VER MODELOS
                                </h4>
                                <FiPlus
                                    className={active ? `question-icon rotate` : `question-icon`}
                                />
                            </div>
                            <div
                                ref={contentRef}
                                className={active ? `answer answer-divider` : `answer naocarrega`}
                            >
                                <Row>
                                    <Col>
                                    <div><Link href="/maquina/maquina_4fgt"><a className="textofaq">4FGT</a></Link></div>
                                    <div><Link href="/maquina/maquina_5hpgt"><a className="textofaq">5HPGT</a></Link></div>
                                    <div><Link href="/maquina/maquina_6hpgte"><a className="textofaq">6HPGTE</a></Link></div>
                                    <div><Link href="/maquina/maquina_8hgt"><a className="textofaq">8H GT</a></Link></div>
                                    <div><Link href="/maquina/maquina_8hgtehybrid"><a className="textofaq">8H GTE HYBRID</a></Link></div>
                                    <div><Link href="/maquina/maquina_12hgtehybrid"><a className="textofaq">12H GTE HYBRID</a></Link></div>
                                    <div><Link href="/maquina/maquina_th45"><a className="textofaq">TH 45</a></Link></div>
                                    <div><Link href="/maquina/maquina_th65"><a className="textofaq">TH 65</a></Link></div>
                                    <div><Link href="/maquina/maquina_th75"><a className="textofaq">TH 75</a></Link></div>
                                    <div><Link href="/maquina/maquina_th95"><a className="textofaq">TH 95</a></Link></div>
                                    
                                    </Col>
                                    <Col>
                                    <div><Link href="/maquina/maquina_5fpgt"><a className="textofaq">5FPGT</a></Link></div>
                                    <div><Link href="/maquina/maquina_6fgt"><a className="textofaq">6FGT</a></Link></div>
                                    <div><Link href="/maquina/maquina_8fgt"><a className="textofaq">8F GT</a></Link></div>
                                    <div><Link href="/maquina/maquina_8hgt"><a className="textofaq">8H GTE</a></Link></div>
                                    <div><Link href="/maquina/maquina_10fgt"><a className="textofaq">10F GT</a></Link></div>
                                    <div><Link href="/maquina/maquina_12fgt"><a className="textofaq">12F GT</a></Link></div>
                                    <div><Link href="/maquina/maquina_th55"><a className="textofaq">TH 55</a></Link></div>
                                    <div><Link href="/maquina/maquina_th65euca"><a className="textofaq">TH 65 EUCA</a></Link></div>
                                    <div><Link href="/maquina/maquina_th85"><a className="textofaq">TH 85</a></Link></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
