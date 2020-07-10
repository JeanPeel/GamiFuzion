import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import HBuild6 from "../../buildings/HBuild/HBuild6"
import HBuild7 from "../../buildings/HBuild/HBuild7"
import HBuild8 from "../../buildings/HBuild/HBuild8"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"

function BuildingRow1c() {

    return (
        <div className="row">
            <div className="label2">Nexus</div>
            <Flipped />
            <HBuild6 />
            <HBuild7 />
            <HBuild8 />
            <Vertical />
            <Filler />
            <Filler />
            <Filler />
            <Vertical />
        </div>
    );
}

export default BuildingRow1c;