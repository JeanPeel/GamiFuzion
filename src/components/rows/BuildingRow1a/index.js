import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import HBuild1 from "../../buildings/HBuild/HBuild1"
import HBuild2 from "../../buildings/HBuild/HBuild2"
import HBuild3 from "../../buildings/HBuild/HBuild3"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"

function BuildingRow1a() {

    return (
        <div className="row">
            <div className="label1">Habit</div>
            <Flipped />
            <HBuild1 />
            <HBuild2 />
            <HBuild3 />
            <Vertical />
            <Filler />
            <Filler />
            <Filler />
            <Vertical />
        </div>
    );
}

export default BuildingRow1a;