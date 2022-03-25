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
                                <div><Link href="/maquinas/logmax/6000v"><a className="textofaq">6000 V</a></Link></div>
                                <div><Link href="/maquinas/logmax/7000c"><a className="textofaq">7000 C</a></Link></div>
                                <div><Link href="/maquinas/logmax/7000xt"><a className="textofaq">7000 XT</a></Link></div>
                                <div><Link href="/maquinas/logmax/e6"><a className="textofaq">E6</a></Link></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
