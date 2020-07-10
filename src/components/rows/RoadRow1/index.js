import React from "react";
import "../style.css";

import FourWay from "../../road/FourWay"
import Horizontal from "../../road/Horizontal"
import StartPod2 from "../../road/StartPod2"
import LeftT from "../../road/LeftT"
import RightT from "../../road/RightT"

function RoadRow1() {

    return (
        <div className='row'>
            <LeftT />
            <Horizontal />
            <Horizontal />
            <Horizontal />
            <FourWay />
            <Horizontal />
            <Horizontal />
            <StartPod2 />
            <RightT />

        </div>
    );
}

export default RoadRow1;