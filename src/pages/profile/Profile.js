import React, { Component } from "react";
import profileImg from "../../images/profile.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="left-contents">
          <div className="profile-text">Just Do It! 하는 <font>백도형</font>입니다.</div>
          <img className="profile-img" src={profileImg} />
          <div className="personality-container">
            <span>성실함</span>
            <span>적응을 잘하는</span>
            <span>꼼꼼함</span>
            <span>끈기있는</span>
          </div>
        </div>
        <div className="right-contents">
          <div className="profile-block">
            <div className="title">
              <font className="front-title">E</font>
              <font className="rest-title">ducation</font>
            </div>
            <div>
              <ul>
                <li>
                  <span className="date">2008.03 - 2011.02</span>
                  <span className="content">한국게임과학고등학교 졸업</span>
                </li>
                <li>
                  <span className="date">2011.03 - 2017.02</span>
                  <span className="content">
                    인덕대학교 컴퓨터소프트웨어과 졸업
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-block">
            <div className="title">
              <font className="front-title">E</font>
              <font className="rest-title">xperiences</font>
            </div>
            <div>
              <ul>
                <li>
                  <span className="date">2010.08.14</span>
                  <span className="content">
                    제 8회 청소년 게임캠프 2010 전국 게임공모전 - 장려상
                  </span>
                </li>
                <li>
                  <span className="date">2010.09.03</span>
                  <span className="content">
                    제 8회 전국학생게임공모전 - 입선
                  </span>
                </li>
                <li>
                  <span className="date">2017.10.20 - 2017.10.21</span>
                  <span className="content">Seoul 2017 Maker Faire 참가</span>
                </li>
                <li>
                  <span className="date">2017.09.29 - 2017.09.30</span>
                  <span className="content">Seoul 2018 Maker Faire 참가</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-block">
            <div className="title">
              <font className="front-title">W</font>
              <font className="rest-title">ork</font>
            </div>
            <div>
              <ul>
                <li>
                  <span className="date">2016.09 - 2020.09</span>
                  <span className="content">비바엔에스 - 매니저</span>
                </li>
              </ul>
            </div>
          </div>
          {/* 취미 */}
          <div className="profile-block">
            <div className="title">
              <font className="front-title">H</font>
              <font className="rest-title">obby</font>
            </div>
            <div className="hobby-block">
              <div>
                <div className="icon-font">
                  <span class="icon-health">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </span>
                </div>
                건강관리
              </div>
              <div>
                <div className="icon-font">
                  <span class="icon-soccer">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </span>
                </div>
                축구
              </div>
              <div>
                <div className="icon-font">
                  <span class="icon-jewellery">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                  </span>
                </div>
                금속공예
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
