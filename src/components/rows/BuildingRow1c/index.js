import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import Nexus6 from "../../buildings/Nexus/Nexus6"
import Nexus7 from "../../buildings/Nexus/Nexus7"
import Nexus8 from "../../buildings/Nexus/Nexus8"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"

function BuildingRow1c() {

    return (
        <div className="row">
            <div className="label2">Nexus</div>
            <Flipped />
            <Nexus6 />
            <Nexus7 />
            <Nexus8 />
            <Vertical />
            <Filler />
            <Filler />
            <Filler />
            <Vertical />
        </div>
    );
}

export default BuildingRow1c;