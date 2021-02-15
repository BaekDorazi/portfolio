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
              issueDate: "2005.11.23",
              isBr: false,
            },
          ],
        },
        {
          acquisitionYear: "2011",
          acquireLicense: [
            {
              licenseName: "ICDL Certificate",
              issuingAgency: "한국생산성본부(KPC)",
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
          icon: "icon-java",
          percentVal: 90,
          color: "#007396",
          contents: "Java",
        },
        {
          icon: "icon-android",
          percentVal: 90,
          color: "#3DDC84",
          contents: "Android",
        },
        {
          icon: "icon-kotlin",
          percentVal: 50,
          color: "#0095D5",
          contents: "Kotlin",
        },
        {
          icon: "icon-arduino",
          percentVal: 60,
          color: "#00979D",
          contents: "Arduino",
        },
        {
          icon: "icon-react",
          percentVal: 70,
          color: "#61DAFB",
          contents: "React",
        },
        {
          icon: "icon-html",
          percentVal: 70,
          color: "#444444",
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

    let showMobileLicense = licenseArr.map((license) => {
      let acquireLicense = license.acquireLicense.map((elem) => {
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

    let showSkill = skillArr.map((skill) => {
      return (
        <div className="chart">
          <div className="skill-icon-area">
            <i className={skill.icon} />
            <div className="skill-name">{skill.contents}</div>
          </div>
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
            <div className="license-container-mo">{showMobileLicense}</div>
          </div>
          <div className="skill-container">{showSkill}</div>
        </div>
      </div>
    );
  }
}

export default Career;
