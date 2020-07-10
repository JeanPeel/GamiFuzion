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
import UTurn from "../../components/road/UTurn"
import UTurn2 from "../../components/road/UTurn2"
import ParkedPod1 from "../../components/road/ParkedPod1"
import ParkedPod2 from "../../components/road/ParkedPod2"
import StartPod from "../../components/road/StartPod"
import StartPod2 from "../../components/road/StartPod2"
import HBuild1 from "../../components/buildings/HBuild/HBuild1"
import HBuild2 from "../../components/buildings/HBuild/HBuild2"
import HBuild3 from "../../components/buildings/HBuild/HBuild3"
import HBuild4 from "../../components/buildings/HBuild/HBuild4"
import HBuild5 from "../../components/buildings/HBuild/HBuild5"
import HBuild6 from "../../components/buildings/HBuild/HBuild6"
import HBuild7 from "../../components/buildings/HBuild/HBuild7"
import HBuild8 from "../../components/buildings/HBuild/HBuild8"
import HN from "../../Images/HN.png"

class Home extends Component {


    render() {
        return (
            <div className="page_body">
                <div className="row">
                    <LeftTop />
                    <Horizontal />
                    <StartPod />
                    <Horizontal />
                    <TopT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <RightTop />
                </div>
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
                <div className="row">
                    <LeftT />
                    <Horizontal />
                    <Horizontal />
                    <Horizontal />
                    <FourWay />
                    <Horizontal />
                    <StartPod2 />
                    <Horizontal />
                    <RightT />
                </div>
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
                <div className="row">
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
                <div className="row">
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
                <div className="row">
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