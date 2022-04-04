import Banner from './banner'
import React from "react";
import Sobre from "./sobre";
import Mobile from "./mobile";


export default function gt10f() {
    return (
        <div>
            <div>
                <Banner />
                <Sobre />
                <Mobile/>
            </div>
        </div>
    )
}
