import React from "react";
import "../style.css";

import LeftBottom from "../../road/LeftBottom"
import Flipped2 from "../../road/Flipped2"
import BottomT from "../../road/BottomT"
import RightBottom from "../../road/RightBottom"
import StartPod3 from "../../road/StartPod3"
import StartPod4 from "../../road/StartPod4"


function BottomRow() {

    return (
        <div className='row'>
            <LeftBottom />
            <Flipped2 />
            <StartPod3 />
            <Flipped2 />
            <BottomT />
            <Flipped2 />
            <Flipped2 />
            <StartPod4 />
            <RightBottom />

        </div>
    );
}

export default BottomRow;