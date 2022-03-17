import Banner from "./banner";
import React from "react";
import Sobre from "./sobre";
import Mobile from "../5fpgt/mobile";


export default function gt5fp() {
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
