import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioModal extends Component {
  render() {
    const { show, toggle, portfolioInfo } = this.props;

    let contentsComp = portfolioInfo.contents.map((contents) => {
      if (contents.includes("http://") || contents.includes("https://")) {
        return (
          <a href={contents} target="_blank">
            ✔ 사이트 이동
          </a>
        );
      } else {
        return (
          <div>
            {contents}
            <br />
          </div>
        );
      }
    });

    return (
      <div>
        <Modal contentClassName="custom-modal" isOpen={show} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolioInfo.title}</ModalHeader>
          <ModalBody className={portfolioInfo.fontColor}>
            <div className="web-display">
              <img src={portfolioInfo.image} width="100%" height="auto" />
              <span className="close-btn" onClick={toggle}>
                X
              </span>
              <div className="sub-title-container">
                {portfolioInfo.subTitle}
              </div>
              <div className="title-container">{portfolioInfo.title}</div>
              <div className="contents-container">{contentsComp}</div>
              <div className="period-container">
                <div className="container-title">개발 기간</div>
                <div className="container-contents">{portfolioInfo.period}</div>
              </div>
              <div className="ide-container">
                <div className="container-title">IDE</div>
                <div className="container-contents">{portfolioInfo.ide}</div>
              </div>
              <div className="skill-container">
                <div className="container-title">사용 기술</div>
                <div className="container-contents">{portfolioInfo.skill}</div>
              </div>
              <div className="join-container">
                <div className="container-title">참여</div>
                <div className="container-contents">
                  {portfolioInfo.join} 명
                </div>
              </div>
            </div>
            <div className="mobile-display">
              <img src={portfolioInfo.image} width="100%" height="auto" />
              <div className="sub-title-container">
                {portfolioInfo.subTitle}
              </div>
              <div className="period-container">
                <div className="container-title">개발 기간</div>
                <div className="container-contents">{portfolioInfo.period}</div>
              </div>
              <div className="ide-container">
                <div className="container-title">IDE</div>
                <div className="container-contents">{portfolioInfo.ide}</div>
              </div>
              <div className="skill-container">
                <div className="container-title">사용 기술</div>
                <div className="container-contents">{portfolioInfo.skill}</div>
              </div>
              <div className="join-container">
                <div className="container-title">참여</div>
                <div className="container-contents">
                  {portfolioInfo.join} 명
                </div>
              </div>
              <div className="contents-container">{contentsComp}</div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;
