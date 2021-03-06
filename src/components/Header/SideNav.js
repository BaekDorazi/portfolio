import React, { Component } from "react";

class SideNav extends Component {
  render() {
    const { showPageName } = this.props;

    return (
      <div class="sidenav-container">
        <div class="left-text">Developer_BaekDoHyung</div>
        <div class="right-text">{showPageName}</div>
      </div>
    );
  }
}

export default SideNav;
