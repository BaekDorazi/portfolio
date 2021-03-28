import React from "react";
import Logo from "components/Header/Logo";
import Menu from "components/Header/Menu";
import SideNav from "components/Header/SideNav";
import MoblieMenu from "components/Header/MobileMenu";

const Header = (props) => {
  const {showPageName} = props;

  return (
    <div>
      <div className="abs header">
        {showPageName === "Intro" && <Logo />}
        <Menu showPageName={showPageName} />
        {showPageName !== "Portfolio" && (
          <SideNav showPageName={showPageName} />
        )}
      </div>
      <div className="abs mobile-header">
        <div className="page-name">{showPageName}</div>
        <div className="menu">
          <MoblieMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
