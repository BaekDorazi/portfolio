import React, { Component } from "react";
import profileImg from "../../images/profile.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="left-contents">
          <img className="profile-img" src={profileImg} />
          <div className="profile-text">
            Just Do It! 하는 개발자 백도형입니다.
          </div>
        </div>
        <div className="right-contents">
          <div>
            <div>Education</div>
            <div>
              <div>한국게임과학고등학교 졸업(2008.03 - 2011.02)</div>
              <div>인덕대학교 졸업(2011.03 - 2017.02)</div>
            </div>
          </div>
          <div>
            <div>Experiences</div>
            <div>
              <div>
                제 8회 청소년 게임캠프 2010 전국 게임공모전 -
                장려상 / 2010.08.14 / (주)e-MotionGame 대표이사
              </div>
              <div>
                제 8회 전국학생게임공모전 - 입선 / 2010.09.03 /
                공주대학교 영상보건대학장
              </div>
              <div>
                허브향기 / 2017.10.20 - 2017.10.21 / Seoul 2017 Maker Faire
              </div>
              <div>
                낚시뽑기 / 2017.09.29 - 2017.09.30 / Seoul 2018 Maker Faire
              </div>
            </div>
          </div>
          <div>
            <div>Work</div>
            <div>
              <div>비바엔에스 (2016.09-2020.09) - 매니저</div>
            </div>
          </div>
          <div>
            <div>Hobby</div>
            <div>
              <div>건강관리</div>
              <div>축구</div>
              <div>금속공예</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
