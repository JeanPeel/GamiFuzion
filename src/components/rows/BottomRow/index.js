import React from "react";
import "../style.css";

import LeftBottom from "../../road/LeftBottom"
import Flipped2 from "../../road/Flipped2"
import BottomT from "../../road/BottomT"
import RightBottom from "../../road/RightBottom"

function BottomRow() {

    return (
        <div className='row'>
            <LeftBottom />
            <Flipped2 />
            <Flipped2 />
            <Flipped2 />
            <BottomT />
            <Flipped2 />
            <Flipped2 />
            <Flipped2 />
            <RightBottom />

        </div>
    );
}

export default BottomRow;