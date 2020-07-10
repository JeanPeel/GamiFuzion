import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import Nexus6 from "../../buildings/Nexus/Nexus6"
import Nexus7 from "../../buildings/Nexus/Nexus7"
import Nexus8 from "../../buildings/Nexus/Nexus8"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import Mall6 from "../../buildings/Mall/Mall6"
import Mall7 from "../../buildings/Mall/Mall7"
import Mall8 from "../../buildings/Mall/Mall8"

function BuildingRow1c() {

    return (
        <div className="row">
            <div className="label2">Nexus</div>
            <Flipped />
            <Nexus6 />
            <Nexus7 />
            <Nexus8 />
            <Vertical />
            <Mall6 />
            <Mall7 />
            <Mall8 />
            <Vertical />
        </div>
    );
}

export default BuildingRow1c;