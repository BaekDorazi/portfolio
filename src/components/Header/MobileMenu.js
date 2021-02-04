import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

class MobileMenu extends Component {
  render() {
    return (
      <div className="mobile-menu-container">
        <input type="checkbox" id="menuicon" />
        <label for="menuicon">
          <span />
          <span />
          <span />
        </label>
        <div class="sidebar">
          <ReactFullpage
            render={({ state, fullpageApi }) => {
              return (
                <div className="menu">
                  <div className="" onClick={() => fullpageApi.moveTo(1, 0)}>
                    Intro
                  </div>
                  <div className="" onClick={() => fullpageApi.moveTo(2, 0)}>
                    Profile
                  </div>
                  <div className="" onClick={() => fullpageApi.moveTo(3, 0)}>
                    Career
                  </div>
                  <div className="" onClick={() => fullpageApi.moveTo(4, 0)}>
                    Portfolio
                  </div>
                  <div className="" onClick={() => fullpageApi.moveTo(5, 0)}>
                    Contact
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default MobileMenu;
