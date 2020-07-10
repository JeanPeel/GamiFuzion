import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import LeftT from "../../road/LeftT"
import RightT from "../../road/RightT"
import UTurn from "../../road/UTurn"
import UTurn2 from "../../road/UTurn2"

function BuildingRow2() {

    return (
        <div className="building_row">
            <div className="row">
                <Flipped />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
            </div>
            <div className="row">
                <LeftT />
                <UTurn />
                <Filler />
                <Filler />
                <Vertical />
                <Filler />
                <Filler />
                <UTurn2 />
                <RightT />
            </div>
            <div className="row">
                <Flipped />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
            </div>
        </div>
    );
}

export default BuildingRow2;