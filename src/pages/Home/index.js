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
import TopT from "../../components/road/TopT"
import BottomT from "../../components/road/BottomT"
import LeftT from "../../components/road/LeftT"
import RightT from "../../components/road/RightT"
import Flipped from "../../components/road/Flipped"
import Flipped2 from "../../components/road/Flipped2"

class Home extends Component {


    render() {
        return (
            <div className="page_body">
                <div className="row1">
                    <LeftTop />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <TopT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <RightTop />
                </div>
                <div className="row2">
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
                <div className="row2">
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
                <div className="row2">
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
                <div className="row1">
                    <LeftT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <FourWay />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <RightT />
                </div>
                <div className="row2">
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
                <div className="row2">
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
                <div className="row2">
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
                <div className="row1">
                    <LeftT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <FourWay />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <RightT />
                </div>
                <div className="row2">
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
                <div className="row2">
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
                <div className="row2">
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
                <div className="row1">
                    <LeftT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <FourWay />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <RightT />
                </div>
                <div className="row2">
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
                <div className="row2">
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
                <div className="row2">
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
                <div className="row1">
                    <LeftBottom />
                    <Flipped2 />
                    <Flipped2 />
                    <Flipped2 />
                    <BottomT />
                    <Flipped2 />
                    <Flipped2 />
                    <Flipped2 />
                    <RightBottom />
                </div>
               
            </div >
        );
    }

}

export default Home;