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
                                    <div><Link href="/maquinas/weiler/b457"><a className="textofaq">B457</a></Link></div>
                                    <div><Link href="/maquinas/weiler/b570"><a className="textofaq">B570</a></Link></div>
                                    <div><Link href="/maquinas/weiler/b670a"><a className="textofaq">B670A</a></Link></div>
                                    <div><Link href="/maquinas/weiler/b758"><a className="textofaq">B758</a></Link></div>
                                    <div><Link href="/maquinas/weiler/h457"><a className="textofaq">H457</a></Link></div>
                                    <div><Link href="/maquinas/weiler/s250"><a className="textofaq">S250</a></Link></div>
                                    <div><Link href="/maquinas/weiler/s450"><a className="textofaq">S450</a></Link></div>
                                    <div><Link href="/maquinas/weiler/m860"><a className="textofaq">M860</a></Link></div>
                                    </Col>

                                    <Col>
                                    <div><Link href="/maquinas/weiler/b458"><a className="textofaq">B458</a></Link></div>
                                    <div><Link href="/maquinas/weiler/b670"><a className="textofaq">B670</a></Link></div>
                                    <div><Link href="/maquinas/weiler/b757"><a className="textofaq">B757</a></Link></div>
                                    <div><Link href="/maquinas/weiler/h157"><a className="textofaq">H157</a></Link></div>
                                    <div><Link href="/maquinas/weiler/h458"><a className="textofaq">H458</a></Link></div>
                                    <div><Link href="/maquinas/weiler/s350"><a className="textofaq">S350</a></Link></div>
                                    <div><Link href="/maquinas/weiler/s550"><a className="textofaq">S550</a></Link></div>
                                    <div><Link href="/maquinas/weiler/f848"><a className="textofaq">F848</a></Link></div>
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
