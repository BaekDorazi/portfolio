import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Menu = (props) => {
  const { showPageName } = props;

  return (
    <div className="menu-container">
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <div className="menu">
              <div
                className={
                  showPageName === "Intro"
                    ? "mouse-over-effect selected-font-color"
                    : "mouse-over-effect mouse-over-font-color"
                }
                onClick={() => fullpageApi.moveTo(1, 0)}
              >
                Intro
              </div>
              <div
                className={
                  showPageName === "Profile"
                    ? "mouse-over-effect selected-font-color"
                    : "mouse-over-effect mouse-over-font-color"
                }
                onClick={() => fullpageApi.moveTo(2, 0)}
              >
                Profile
              </div>
              <div
                className={
                  showPageName === "Career"
                    ? "mouse-over-effect selected-font-color"
                    : "mouse-over-effect mouse-over-font-color"
                }
                onClick={() => fullpageApi.moveTo(3, 0)}
              >
                Career
              </div>
              <div
                className={
                  showPageName === "Portfolio"
                    ? "mouse-over-effect selected-font-color"
                    : "mouse-over-effect mouse-over-font-color"
                }
                onClick={() => fullpageApi.moveTo(4, 0)}
              >
                Portfolio
              </div>
              <div
                className={
                  showPageName === "Contact"
                    ? "mouse-over-effect selected-font-color"
                    : "mouse-over-effect mouse-over-font-color"
                }
                onClick={() => fullpageApi.moveTo(5, 0)}
              >
                Contact
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Menu;
