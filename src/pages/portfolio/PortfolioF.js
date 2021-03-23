import React, { useState, useEffect } from "react";
import Pagination from "components/Pagination";
import PortfolioModal from "components/PortfolioModal/PortfolioModal";
import * as PortfolioData from "./PortfolioData";

const Portfolio = () => {
  const [filterPortfolioArr, setFilterPortfolioArr] = useState([]); //필터상태 포트폴리오 json
  const [showPortfolioArr, setShowPortfolioArr] = useState([]); //한페이지에 보여줘야 할 json
  const [totalCount, setTotalCount] = useState(0); //이벤트 영상 전체 갯수
  const [activePage, setActivePage] = useState(1); //active 된 페이지
  const [rowCount, setRowCount] = useState(6); //한페이지에 보여줄 갯수
  const [portfolioModal, setPortfolioModal] = useState(false); //포트폴리오 상세보기 모달 상태
  const [portfolioInfo, setPortfolioInfo] = useState({}); //선택된 포트폴리오 정보

  let filterList = ["전체", "안드로이드", "웹"];

  useEffect(() => {
    let _portfolioArr = PortfolioData.portfolioArr.slice(0, rowCount);

    setFilterPortfolioArr(PortfolioData.portfolioArr);
    setShowPortfolioArr(_portfolioArr);
    setTotalCount(PortfolioData.portfolioArr.length);

    console.log("useEffect111", PortfolioData.portfolioArr);
  }, []);

  useEffect(() => {
    let offset = rowCount * activePage - rowCount;

    let _portfolioArr = filterPortfolioArr.slice(offset, offset + rowCount);
    setShowPortfolioArr(_portfolioArr);

    console.log("useEffect222", PortfolioData.portfolioArr);
  }, []);

  //필터 눌렀을때 처리되는 메소드
  const handleOnFilterClick = (num) => {
    let _portfolioArr = PortfolioData.portfolioArr;
    let filterPortfolioArr = [];
    let filterPortfolioLength;

    if (num === 0) {
      filterPortfolioArr = _portfolioArr;
    } else if (num === 1) {
      filterPortfolioArr = _portfolioArr.filter((portfolio) =>
        portfolio.filterVal.includes("android")
      );
    } else if (num === 2) {
      filterPortfolioArr = _portfolioArr.filter((portfolio) =>
        portfolio.filterVal.includes("web")
      );
    }

    filterPortfolioLength = filterPortfolioArr.length;
    _portfolioArr = filterPortfolioArr.slice(0, rowCount);

    setFilterPortfolioArr(filterPortfolioArr);
    setShowPortfolioArr(_portfolioArr);
    setTotalCount(filterPortfolioLength);
    setActivePage(1);
  };

  //페이지 변경될때 호출되는 메소드
  const handleOnPageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  //모달창 상태 변경 메소드
  const toggleModal = (idx) => {
    let portfolioInfo = showPortfolioArr.find((elem) => elem.idx === idx); //선택 된 포트폴리오 정보 모달로 넘겨주기 위해

    setPortfolioModal(!portfolioModal);
    setPortfolioInfo(portfolioInfo);
  };

  let filterComp = filterList.map((filter, idx) => {
    return (
      <div
        className="filter"
        onClick={() => {
          handleOnFilterClick(idx);
        }}
      >
        {filter}
      </div>
    );
  });

  console.log("showPortfolioArr = = ", showPortfolioArr);
  let portfolioComp = (showPortfolioArr || []).map((portfolio, idx) => {
    return (
      <div>
        <div className="screen" onClick={() => toggleModal(portfolio.idx)}>
          <span />
          <span />
          <span />
          <span />
          <div className="portfolio-title">{portfolio.title}</div>
          <div className="portfolio-dim" />
          <img src={portfolio.image} />
          <div className={"sub-title-container " + portfolio.fontColor}>
            {portfolio.subTitle}
          </div>
          <div className={"title-container " + portfolio.fontColor}>
            {portfolio.title}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio-container">
      <div className="filter-container brackets">{filterComp}</div>
      <div className="list-container">
        <div className="portfolio-list">{portfolioComp}</div>
        <Pagination
          onPageChange={handleOnPageChange}
          total={totalCount}
          rowCount={rowCount}
          currentPage={activePage}
        />
        {portfolioModal && (
          <PortfolioModal
            show={portfolioModal}
            toggle={toggleModal}
            portfolioInfo={portfolioInfo}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
