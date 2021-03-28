import React, { Component } from "react";
import moment from "moment";

const Logo = () => {
  return (
    <div>
      <div className="logo-container">
        <div className="logo">BAEKDOHYUNG</div>
        <div className="date">{moment().format("YYYY.MM")}</div>
      </div>
    </div>
  );
}

export default Logo;
