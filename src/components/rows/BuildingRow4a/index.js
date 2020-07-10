import React from "react";
import "../style.css";

import Flipped from "../../road/Flipped"
import Vertical from "../../road/Vertical"
import Filler from "../../road/Filler"

function BuildingRow4a() {

    return (
            <div className="row">
                <Flipped />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
                <Filler />
                <Filler />
                <Filler />
                <Vertical />
            </div>
    );
}

export default BuildingRow4a;