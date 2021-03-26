import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import IntroF from "pages/intro/IntroF";
import ProfileF from "pages/profile/ProfileF";
import CareerF from "pages/career/CareerF";
import PortfolioF from "pages/portfolio/PortfolioF";
import ContactF from "pages/contact/ContactF";

const FullPage = (props) => {
  const { handlePageChange } = props;

  const afterLoad = (origin, destination, direction) => {
    handlePageChange(destination.anchor);
  };

  return (
    <div className="abs">
      <ReactFullpage
        anchors={["Intro", "Profile", "Career", "Portfolio", "Contact"]}
        scrollOverflow={true}
        navigation={true}
        navigationPosition={"left"}
        navigationTooltips={[
          "Intro",
          "Profile",
          "Career",
          "Portfolio",
          "Contact",
        ]}
        afterLoad={afterLoad}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <IntroF />
              </div>
              <div className="section">
                <ProfileF />
              </div>
              <div className="section">
                <CareerF
                  isPageFocus={
                    !state.destination || state.destination.anchor === "Career"
                      ? true
                      : false
                  } //Career 페이지에 포커싱 되어있을때
                />
              </div>
              <div className="section">
                <PortfolioF />
              </div>
              <div className="section">
                <ContactF />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default FullPage;
