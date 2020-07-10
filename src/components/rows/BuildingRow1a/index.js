import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import Nexus1 from "../../buildings/Nexus/Nexus1"
import Nexus2 from "../../buildings/Nexus/Nexus2"
import Nexus3 from "../../buildings/Nexus/Nexus3"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import Mall1 from "../../buildings/Mall/Mall1"
import Mall2 from "../../buildings/Mall/Mall2"
import Mall3 from "../../buildings/Mall/Mall3"

function BuildingRow1a() {

    return (
        <div className="row">
            <div className="label1">Habit</div>
            <Flipped />
            <Nexus1 />
            <Nexus2 />
            <Nexus3 />
            <Vertical />
            <div className="label3">Avatar Mall</div>
            <Mall1 />
            <Mall2 />
            <Mall3 />
            <Vertical />
        </div>
    );
}

export default BuildingRow1a;