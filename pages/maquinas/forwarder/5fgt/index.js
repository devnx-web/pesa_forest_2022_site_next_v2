import Banner from './banner'
import React from "react";
import Sobre from "./sobre";
import Mobile from "../5fgt/mobile";


export default function gt5f() {
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
