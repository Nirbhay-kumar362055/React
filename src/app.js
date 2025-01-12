import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






// React functional Component
const Headingcomponent = () => (
    <div>
        <Header/>
        <Body/>
    </div>
);

const access = ReactDOM.createRoot(document.getElementById("Root"));
access.render(<Headingcomponent/>);
