import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Intro from "pages/intro/Intro";
import IntroF from "pages/intro/IntroF";
import Profile from "pages/profile/Profile";
import ProfileF from "pages/profile/ProfileF";
import Career from "pages/career/Career";
import CareerF from "pages/career/CareerF";
import Portfolio from "pages/portfolio/Portfolio";
import PortfolioF from "pages/portfolio/PortfolioF";
import Contact from "pages/contact/Contact";

class FullPage extends Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section ", destination);
  }

  afterLoad(origin, destination, direction) {
    console.log("after load ", destination);
    const { handlePageChange } = this.props;

    handlePageChange(destination.anchor);
  }

  render() {
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
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  {/* <Intro /> */}
                  <IntroF />
                </div>
                <div className="section">
                  {/* <Profile /> */}
                  <ProfileF />
                </div>
                <div className="section">
                  {/* <Career
                    isPageFocus={
                      !state.destination ||
                      state.destination.anchor === "Career"
                        ? true
                        : false
                    } //Career 페이지에 포커싱 되어있을때
                  /> */}
                  <CareerF
                    isPageFocus={
                      !state.destination ||
                      state.destination.anchor === "Career"
                        ? true
                        : false
                    } //Career 페이지에 포커싱 되어있을때
                  />
                </div>
                <div className="section">
                  {/* <Portfolio /> */}
                  <PortfolioF />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default FullPage;
