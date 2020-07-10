import React from "react";
import "../style.css";

import LeftTop from "../../road/LeftTop"
import Horizontal from "../../road/Horizontal"
import StartPod from "../../road/StartPod"
import TopT from "../../road/TopT"
import RightTop from "../../road/RightTop"

function TopRow() {

    return (
        <div className='row'>
            <LeftTop />
            <Horizontal />
            <StartPod />
            <Horizontal />
            <TopT />
            <Horizontal />
            <Horizontal />
            <Horizontal />
            <RightTop />

        </div>
    );
}

export default TopRow;