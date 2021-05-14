import Header from "Components/Header";
import Home from "Views/Home";
import About from "Views/About";
import Works from "Views/Works";
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import FooterContent from "Components/Footer";
const anchors = ["home", "about", "works"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    controlArrows
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
      return (
        <div>
          <Home />
          <About />
          <Works />
          <FooterContent />
        </div>
      );
    }}
  />
);
export default FullpageWrapper;
