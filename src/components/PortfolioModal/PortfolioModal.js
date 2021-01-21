import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PortfolioModal extends Component {
  render() {
    const { show, toggle, portfolioInfo } = this.props;

    return (
      <div>
        <Modal contentClassName="custom-modal" isOpen={show} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolioInfo.title}</ModalHeader>
          <ModalBody>
            <img src={portfolioInfo.image} width="100%" height="auto" />
            <div className="title">{portfolioInfo.title}</div>
            <div className="contents">{portfolioInfo.contents}</div>
            <div className="term">기간 {portfolioInfo.term}</div>
            <div className="ide">IDE {portfolioInfo.ide}</div>
            <div className="join">참여 {portfolioInfo.join}명</div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;
