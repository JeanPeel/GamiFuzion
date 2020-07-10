import React from "react";
import "../style.css";

import FourWay from "../../road/FourWay"
import Horizontal from "../../road/Horizontal"
import StartPod2 from "../../road/StartPod2"
import LeftT from "../../road/LeftT"
import RightT from "../../road/RightT"

function RoadRow2() {

    return (
        <div className='row'>
            <LeftT />
            <StartPod2 />
            <Horizontal />
            <Horizontal />
            <FourWay />
            <Horizontal />
            <Horizontal />
            <Horizontal />
            <RightT />

        </div>
    );
}

export default RoadRow2;