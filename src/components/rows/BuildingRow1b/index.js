import React from "react";
import "../style.css";

import HBuild4 from "../../buildings/HBuild/HBuild4"
import HBuild5 from "../../buildings/HBuild/HBuild5"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import LeftT from "../../road/LeftT"
import ParkedPod1 from "../../road/ParkedPod1"
import ParkedPod2 from "../../road/ParkedPod2"
import RightT from "../../road/RightT"
import HN from "../../../Images/HN.png"

function BuildingRow1b() {

    return (
        <div className="row">
            <img src={HN} alt="Flying Pod" className="logo1" />
            <LeftT />
            <ParkedPod1 />
            <HBuild4 />
            <HBuild5 />
            <Vertical />
            <Filler />
            <Filler />
            <ParkedPod2 />
            <RightT />
        </div>
    );
}

export default BuildingRow1b;