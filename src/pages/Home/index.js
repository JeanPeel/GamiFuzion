import React, { Component } from "react";
import "./style.css";

import BottomRow from "../../components/rows/BottomRow"
import BuildingRow1a from "../../components/rows/BuildingRow1a"
import BuildingRow1b from "../../components/rows/BuildingRow1b"
import BuildingRow1c from "../../components/rows/BuildingRow1c"
import BuildingRow2a from "../../components/rows/BuildingRow2a"
import BuildingRow2b from "../../components/rows/BuildingRow2b"
import BuildingRow2c from "../../components/rows/BuildingRow2c"
import BuildingRow3a from "../../components/rows/BuildingRow3a"
import BuildingRow3b from "../../components/rows/BuildingRow3b"
import BuildingRow3c from "../../components/rows/BuildingRow3c"
import BuildingRow4a from "../../components/rows/BuildingRow4a"
import BuildingRow4b from "../../components/rows/BuildingRow4b"
import BuildingRow4c from "../../components/rows/BuildingRow4c"
import RoadRow1 from "../../components/rows/RoadRow1"
import RoadRow2 from "../../components/rows/RoadRow2"
import RoadRow3 from "../../components/rows/RoadRow3"
import TopRow from "../../components/rows/TopRow"


class Home extends Component {


    render() {
        return (
            <div className="page_body">
                <TopRow />
                <BuildingRow1a />
                <BuildingRow1b />
                <BuildingRow1c />
                <RoadRow1 />
                <BuildingRow2a />
                <BuildingRow2b />
                <BuildingRow2c />
                <RoadRow2 />
                <BuildingRow3a />
                <BuildingRow3b />
                <BuildingRow3c />
                <RoadRow3 />
                <BuildingRow4a />
                <BuildingRow4b />
                <BuildingRow4c />
                <BottomRow />
            </div >
        );
    }

}

export default Home;