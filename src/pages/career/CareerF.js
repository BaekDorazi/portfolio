import React, { useState, useEffect, useRef } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";
import * as CareerData from './CareerData';

const Career = (props) => {
  const showLicense = CareerData.licenseArr.map((license) => {
    const acquireLicense = license.acquireLicense.map((elem) => {
      return (
        <div>
          · <span className="desc">{elem.licenseName}</span>
          {elem.isBr && <br />}({elem.issueDate}. {elem.issuingAgency})
        </div>
      );
    });
    return (
      <li>
        <div className="timeline-content">
          <h1>{license.acquisitionYear}</h1>
          {acquireLicense}
        </div>
      </li>
    );
  });

  const showMobileLicense = CareerData.licenseArr.map((license) => {
    const acquireLicense = license.acquireLicense.map((elem) => {
      return (
        <p className="licenseName">
          {elem.licenseName}
          <span className="issue-Agency-Date">
            ({elem.issueDate}. {elem.issuingAgency})
          </span>
        </p>
      );
    });
    return (
      <div className="Year">
        <div className="underline">{license.acquisitionYear}년</div>
        {acquireLicense}
      </div>
    );
  });

  const showSkill = CareerData.skillArr.map((skill) => {
    return (
      <div className="chart">
          <i className={skill.icon} />
        <SkillProgress
          isPageFocus={props.isPageFocus}
          percentVal={skill.percentVal}
          color={skill.color}
          contents={skill.contents}
        />
      </div>
    );
  });

  return (
    <div className="career-container">
      <div className="license-skill-container">
        <div className="license-container">
          <div className="circle_top" />
          <div className="circle_bottom" />
          <div className="license-title">License</div>
          <div className="timeline-container">
            <div className="timeline">
              <ul>{showLicense}</ul>
            </div>
          </div>
          <div className="license-container-mo">{showMobileLicense}</div>
        </div>
        <div className="skill-container">{showSkill}</div>
      </div>
    </div>
  );
}

export default Career;
