import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import HBuild1 from "../../road/HBuild1"
import HBuild2 from "../../road/HBuild2"
import HBuild3 from "../../road/HBuild3"
import HBuild4 from "../../road/HBuild4"
import HBuild5 from "../../road/HBuild5"
import HBuild6 from "../../road/HBuild6"
import HBuild7 from "../../road/HBuild7"
import HBuild8 from "../../road/HBuild8"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import LeftT from "../../road/LeftT"
import ParkedPod1 from "../../road/ParkedPod1"
import ParkedPod2 from "../../road/ParkedPod2"
import RightT from "../../road/RightT"

function BuildingRow1() {

    return (
        <div className="building_row">
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
        </div>
    );
}

export default BuildingRow1;