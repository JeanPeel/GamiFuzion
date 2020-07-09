import React, { Component } from "react";
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Body from "./Body";

class Home extends Component {


    render() {
        return (
            <div className="page_body">
                <NavBar />
                <Body />
                <Footer />
            </div >
        );
    }

}

export default Home;