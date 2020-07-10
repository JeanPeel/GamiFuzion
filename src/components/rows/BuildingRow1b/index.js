import React from "react";
import "../style.css";

import Nexus4 from "../../buildings/Nexus/Nexus4"
import Nexus5 from "../../buildings/Nexus/Nexus5"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import LeftT from "../../road/LeftT"
import ParkedPod1 from "../../road/ParkedPod1"
import ParkedPod2 from "../../road/ParkedPod2"
import RightT from "../../road/RightT"
import HN from "../../../Images/HN.png"
import Mall4 from "../../buildings/Mall/Mall4"
import Mall5 from "../../buildings/Mall/Mall5"

function BuildingRow1b() {

    return (
        <div className="row">
            <img src={HN} alt="Flying Pod" className="logo1" />
            <LeftT />
            <ParkedPod1 />
            <Nexus4 />
            <Nexus5 />
            <Vertical />
            <Mall4 />
            <Mall5 />
            <ParkedPod2 />
            <RightT />
        </div>
    );
}

export default BuildingRow1b;