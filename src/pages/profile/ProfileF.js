import React, { useState, useEffect, useRef } from "react";
import * as profileData from "./ProfileData";
import profileImg from "../../images/profile.jpg";

const Profile = () => {
  const personalityComp = profileData.personalityArr.map((personality) => {
    return <span># {personality}</span>;
  });

  let profileBlockComp = profileData.profileBlockArr.map((profile) => {
    let arrComp;
    if (profile.compStatus === 1) {
      arrComp = profile.arr.map((elem) => {
        return (
          <li>
            <span className="date">{elem.date}</span>
            <span className="content">{elem.content}</span>
          </li>
        );
      });
    } else if (profile.compStatus === 2) {
      arrComp = profile.arr.map((elem) => {
        let iconArr = elem.iconArr.map((iconElem) => {
          return <span class={iconElem} />;
        });
        return (
          <div>
            <div className="icon-font">
              <span class={elem.iconClassName}>{iconArr}</span>
            </div>
            {elem.iconName}
          </div>
        );
      });
    }

    return (
      <div className="profile-block">
        <div className="title">
          <font className="front-title">{profile.frontTitle}</font>
          <font className="rest-title">{profile.restTitle}</font>
        </div>
        {profile.compStatus === 1 ? (
          <ul>{arrComp}</ul>
        ) : (
          <div className="hobby-block">{arrComp}</div>
        )}
      </div>
    );
  });

  return (
    <div className="profile-container">
      <div className="image-container">
        <div className="profile-text">
          Just Do It! 하는 <font>백도형</font>입니다.
        </div>
        <img className="profile-img" src={profileImg} />
        <div className="personality-container">{personalityComp}</div>
      </div>
      <div className="profile-contents-container">{profileBlockComp}</div>
    </div>
  );
};

export default Profile;
