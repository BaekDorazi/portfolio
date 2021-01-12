import React, { Component } from "react";
import SkillProgress from "components/SkillProgress/SkillProgress";

class Career extends Component {
  constructor(props) {
    super(props);

    this.state = {
      licenseArr: [
        {
          acquisitionYear: "2005",
          acquireLicense: [
            {
              licenseName: "ITQ(한글, 파워포인트, 엑셀)",
              issuingAgency: "한국생산성본부",
              issueDate: "2005.05.07",
              isBr: false, //길어서 br로 내려야될때 false는 br태그 x
            },
            {
              licenseName: "워드프로세서 2급",
              issuingAgency: "대한상공회의소",
              issueDate: "22005.11.23",
              isBr: false,
            },
          ],
        },
        {
          acquisitionYear: "2011",
          acquireLicense: [
            {
              licenseName: "ICDL",
              issuingAgency: "ICDL",
              issueDate: "2011.10.10",
              isBr: false,
            },
          ],
        },
        {
          acquisitionYear: "2015",
          acquireLicense: [
            {
              licenseName: "정보처리산업기사",
              issuingAgency: "한국산업인력공단",
              issueDate: "2015.10.23",
              isBr: true,
            },
          ],
        },
        {
          acquisitionYear: "2016",
          acquireLicense: [
            {
              licenseName: "정보처리기사 ",
              issuingAgency: "한국산업인력공단",
              issueDate: "2016.07.15",
              isBr: true,
            },
          ],
        },
      ], //자격증 정보 json
      skillArr: [
        {
          icon: "icon-adobephotoshop",
          percentVal: 90,
          color: "#00c8ff",
          contents: "Java",
        },
        {
          icon: "icon-adobeillustrator",
          percentVal: 90,
          color: "#ff7c00",
          contents: "Android",
        },
        {
          icon: "icon-adobeindesign",
          percentVal: 50,
          color: "#fd3f93",
          contents: "Kotlin",
        },
        {
          icon: "icon-adobeaftereffects",
          percentVal: 60,
          color: "#d291ff",
          contents: "Arduino",
        },
        {
          icon: "icon-adobepremiere",
          percentVal: 70,
          color: "#ea77ff",
          contents: "React",
        },
        {
          icon: "icon-embed2",
          percentVal: 70,
          color: "#000000",
          contents: "HTML+CSS",
        },
      ], //skill 정보 json
    };
  }

  render() {
    const { licenseArr, skillArr } = this.state;
    const { isPageFocus } = this.props;

    let showLicense = licenseArr.map((license) => {
      let acquireLicense = license.acquireLicense.map((elem) => {
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

    let showSkill = skillArr.map((skill) => {
      return (
        <div className="chart">
          <i className={skill.icon}></i>
          <SkillProgress
            isPageFocus={isPageFocus}
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
          </div>
          <div className="skill-container">{showSkill}</div>
        </div>
      </div>
    );
  }
}

export default Career;
