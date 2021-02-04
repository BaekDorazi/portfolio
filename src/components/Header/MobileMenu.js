import React, { Component } from "react";

class MobileMenu extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="menuicon" />
        <label for="menuicon">
          <span />
          <span />
          <span />
        </label>
        <div class="sidebar"></div>
      </div>
    );
  }
}

export default MobileMenu;
