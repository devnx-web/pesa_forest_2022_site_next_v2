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
                                    <div><Link href="/maquinas/quadco/18c"><a className="textofaq">18 C</a></Link></div>
                                <div><Link href="/maquinas/quadco/22sc"><a className="textofaq">22SC</a></Link></div>
                                    </Col>

                                    <Col>
                                    <div><Link href="/maquinas/quadco/22c"><a className="textofaq">22 C</a></Link></div>
                                    
                                <div><Link href="/maquinas/quadco/24c"><a className="textofaq">24 C</a></Link></div>
                                    </Col>

                                    <Col>
                                    <div><Link href="/maquinas/quadco/27sc"><a className="textofaq">27 SC</a></Link></div>
                                    
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
