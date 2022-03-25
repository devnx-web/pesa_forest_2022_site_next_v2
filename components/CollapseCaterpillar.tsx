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
                                    <div><Link href="/maquinas/caterpillar/pth18"><a className="textofaq">PTH18</a></Link></div>
                                    <div><Link href="/maquinas/caterpillar/pth20"><a className="textofaq">PTH20</a></Link></div>
                                    <div><Link href="/maquinas/caterpillar/psm36"><a className="textofaq">PSM36</a></Link></div>
                                    </Col>

                                    <Col>
                                    <div><Link href="/maquinas/caterpillar/ptl20"><a className="textofaq">PTL20</a></Link></div>
                                    <div><Link href="/maquinas/caterpillar/pth25"><a className="textofaq">PTH25</a></Link></div>
                                    <div><Link href="/maquinas/caterpillar/psm20"><a className="textofaq">PSM20</a></Link></div>
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
