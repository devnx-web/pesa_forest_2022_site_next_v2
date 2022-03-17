
import Banner from './banner'
import React from "react";
import Sobre from "./sobre";
import Mobile from "../4fgt/mobile";


export default function gt4f() {
    return (
        <div>
            <div>

                <div className={'ocultamob'}>
                    <Banner />
                    <Sobre />
                </div>
                <div className={'ocultadesk'}>
                    <Mobile />
                </div>

            </div>
        </div>
    )
}
