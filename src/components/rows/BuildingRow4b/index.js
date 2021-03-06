import React from "react";
import "../style.css";

import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"
import LeftT from "../../road/LeftT"
import RightT from "../../road/RightT"
import UTurn from "../../road/UTurn"
import UTurn2 from "../../road/UTurn2"

function BuildingRow4b() {

    return (
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
    );
}

export default BuildingRow4b;