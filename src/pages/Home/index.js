import React, { Component } from "react";
import "./style.css";

import Filler from "../../components/road/Filler"
import FourWay from "../../components/road/FourWay"
import Horizontal from "../../components/road/Horizontal"
import LeftBottom from "../../components/road/LeftBottom"
import LeftTop from "../../components/road/LeftTop"
import RightBottom from "../../components/road/RightBottom"
import RightTop from "../../components/road/RightTop"
import Vertical from "../../components/road/Vertical"

class Home extends Component {


    render() {
        return (
            <div className="page_body">
                <div className="row1">
                    <LeftTop />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />


                </div>
            </div >
        );
    }

}

export default Home;