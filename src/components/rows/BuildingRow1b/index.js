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
import MallLogoB from "../../../Images/MallLogoB.png"
import WhitePuff from "../../../Images/white_puff.png"

function BuildingRow1b() {

    return (
        <div className="row">
            <img src={HN} alt="HN Logo" className="logo1" />
            <LeftT />
            <ParkedPod1 />
            <Nexus4 />
            <Nexus5 />
            <Vertical />
            <img src={MallLogoB} alt="HN Logo" className="logo3" />
            <img src={WhitePuff} alt="HN Logo" className="avatar" />
            <Mall4 />
            <Mall5 />
            <ParkedPod2 />
            <RightT />
        </div>
    );
}

export default BuildingRow1b;