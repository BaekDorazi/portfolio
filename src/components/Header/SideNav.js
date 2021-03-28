import React from "react";

const SideNav = (props) => {
  const { showPageName } = props;

  return (
    <div class="sidenav-container">
      <div class="left-text">Developer_BaekDoHyung</div>
      <div class="right-text">{showPageName}</div>
    </div>
  );
};

export default SideNav;
