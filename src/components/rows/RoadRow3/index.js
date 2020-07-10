import React from "react";
import "../style.css";

import FourWay from "../../road/FourWay"
import Horizontal from "../../road/Horizontal"
import StartPod1 from "../../road/StartPod1"
import LeftT from "../../road/LeftT"
import RightT from "../../road/RightT"

function RoadRow3() {

    return (
        <div className='row'>
            <LeftT />
            <Horizontal />
            <Horizontal />
            <Horizontal />
            <FourWay />
            <StartPod1 />
            <Horizontal />
            <Horizontal />
            <RightT />

        </div>
    );
}

export default RoadRow3;