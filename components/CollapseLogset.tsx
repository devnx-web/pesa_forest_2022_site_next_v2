import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

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
                                <div><Link href="/maquinas/logset/4fgt"><a className="textofaq">4F GT</a></Link><Link href="/maquinas/logset/5fgt"><a className="textofaq">5F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/5fgt"><a className="textofaq">5F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/5fpgt"><a className="textofaq">5FP GT</a></Link></div>
                                <div><Link href="/maquinas/logset/5hpgt"><a className="textofaq">5HP GT</a></Link></div>
                                <div><Link href="/maquinas/logset/6fgt"><a className="textofaq">6F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/6hpgt"><a className="textofaq">6HP GT</a></Link></div>
                                <div><Link href="/maquinas/logset/6hpgte"><a className="textofaq">6HP GTE</a></Link></div>
                                <div><Link href="/maquinas/logset/8fgt"><a className="textofaq">8F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/8hgt"><a className="textofaq">8H GT</a></Link></div>
                                <div><Link href="/maquinas/logset/8hgte"><a className="textofaq">8H GTE</a></Link></div>
                                <div><Link href="/maquinas/logset/8hgthybrid"><a className="textofaq">8H GTE HYBRID</a></Link></div>
                                <div><Link href="/maquinas/logset/10fgt"><a className="textofaq">10F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/12fgt"><a className="textofaq">12F GT</a></Link></div>
                                <div><Link href="/maquinas/logset/12hybrid"><a className="textofaq">12H GTE HYBRID</a></Link></div>
                                <div><Link href="/maquinas/logset/th45"><a className="textofaq">TH 45</a></Link></div>
                                <div><Link href="/maquinas/logset/th55"><a className="textofaq">TH 55</a></Link></div>
                                <div><Link href="/maquinas/logset/th65"><a className="textofaq">TH 65</a></Link></div>
                                <div><Link href="/maquinas/logset/th65euca"><a className="textofaq">TH 65 EUCA</a></Link></div>
                                <div><Link href="/maquinas/logset/th75"><a className="textofaq">TH 75</a></Link></div>
                                <div><Link href="/maquinas/logset/th85"><a className="textofaq">TH 85</a></Link></div>
                                <div><Link href="/maquinas/logset/th95"><a className="textofaq">TH 95</a></Link></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
