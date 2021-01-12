import React, { Component } from "react";
import profileImg from "../../images/screensaver_01.png";
import profileImg2 from "../../images/homepage_01.png";
import profileImg3 from "../../images/webbanner_01.png";
import Pagination from "components/Pagination";
import PortfolioModal from "components/PortfolioModal/PortfolioModal";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArr: [
        {
          idx: 1,
          image: profileImg,
          filterVal: "a",
          title: "test1",
          contents: "test1번의 포트폴리오",
        },
        {
          idx: 2,
          image: profileImg,
          filterVal: "a",
          title: "test2",
          contents: "test2번의 포트폴리오",
        },
        {
          idx: 3,
          image: profileImg2,
          filterVal: "b",
          title: "test3",
          contents: "test3번의 포트폴리오",
        },
        {
          idx: 4,
          image: profileImg3,
          filterVal: "c",
          title: "test4",
          contents: "test4번의 포트폴리오",
        },
        {
          idx: 5,
          image: profileImg3,
          filterVal: "c",
          title: "test5",
          contents: "test5번의 포트폴리오",
        },
        {
          idx: 6,
          image: profileImg3,
          filterVal: "c",
          title: "test6",
          contents: "test6번의 포트폴리오",
        },
        {
          idx: 7,
          image: profileImg,
          filterVal: "a",
          title: "test7",
          contents: "test1번의 포트폴리오",
        },
        {
          idx: 8,
          image: profileImg,
          filterVal: "a",
          title: "test8",
          contents: "test2번의 포트폴리오",
        },
        {
          idx: 9,
          image: profileImg2,
          filterVal: "b",
          title: "test9",
          contents: "test3번의 포트폴리오",
        },
        {
          idx: 10,
          image: profileImg3,
          filterVal: "c",
          title: "test10",
          contents: "test4번의 포트폴리오",
        },
        {
          idx: 11,
          image: profileImg3,
          filterVal: "c",
          title: "test11",
          contents: "test5번의 포트폴리오",
        },
        {
          idx: 12,
          image: profileImg,
          filterVal: "a",
          title: "test12",
          contents: "test1번의 포트폴리오",
        },
        {
          idx: 13,
          image: profileImg,
          filterVal: "a",
          title: "test13",
          contents: "test2번의 포트폴리오",
        },
        {
          idx: 14,
          image: profileImg2,
          filterVal: "b",
          title: "test14",
          contents: "test3번의 포트폴리오",
        },
        {
          idx: 15,
          image: profileImg3,
          filterVal: "c",
          title: "test15",
          contents: "test4번의 포트폴리오",
        },
        {
          idx: 16,
          image: profileImg3,
          filterVal: "c",
          title: "test16",
          contents: "test5번의 포트폴리오",
        },
        {
          idx: 17,
          image: profileImg3,
          filterVal: "c",
          title: "test17",
          contents: "test6번의 포트폴리오",
        },
        {
          idx: 18,
          image: profileImg,
          filterVal: "a",
          title: "test18",
          contents: "test1번의 포트폴리오",
        },
        {
          idx: 19,
          image: profileImg,
          filterVal: "a",
          title: "test19",
          contents: "test2번의 포트폴리오",
        },
        {
          idx: 20,
          image: profileImg2,
          filterVal: "b",
          title: "test20",
          contents: "test3번의 포트폴리오",
        },
        {
          idx: 21,
          image: profileImg3,
          filterVal: "c",
          title: "test21",
          contents: "test4번의 포트폴리오",
        },
        {
          idx: 22,
          image: profileImg3,
          filterVal: "c",
          title: "test22",
          contents: "test5번의 포트폴리오",
        },
      ], //포트폴리오 전체 json
      filterPortfolioArr: [], //필터상태 포트폴리오 json
      showPortfolioArr: [], //한페이지에 보여줘야 할 json
      totalCount: 0, //이벤트 영상 전체 갯수
      activePage: 1, //active 된 페이지
      rowCount: 6, //화면에 보여줄 갯수
      portfolioModal: false, //포트폴리오 상세보기 모달 상태
      portfolioInfo: {}, //선택된 포트폴리오 정보
    };
  }

  componentDidMount() {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: portfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: portfolioArr.length,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { filterPortfolioArr } = this.state;
    const { rowCount, activePage } = this.state;
    let offset = rowCount * activePage - rowCount;

    if (prevState.activePage !== activePage) {
      let _portfolioArr = filterPortfolioArr.slice(offset, offset + rowCount);
      this.setState({ showPortfolioArr: _portfolioArr });
    }
  }

  //필터 눌렀을때 처리되는 메소드
  handleOnFilterClick = (num) => {
    const { portfolioArr, rowCount } = this.state;
    let _portfolioArr = portfolioArr;
    let filterPortfolioArr = [];
    let filterPortfolioLength;

    if (num === 0) {
      filterPortfolioArr = _portfolioArr;
    } else if (num === 1) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "a"
      );
    } else if (num === 2) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "b"
      );
    } else if (num === 3) {
      filterPortfolioArr = _portfolioArr.filter(
        (portfolio) => portfolio.filterVal === "c"
      );
    }

    filterPortfolioLength = filterPortfolioArr.length;
    _portfolioArr = filterPortfolioArr.slice(0, rowCount);

    this.setState({
      filterPortfolioArr: filterPortfolioArr,
      showPortfolioArr: _portfolioArr,
      totalCount: filterPortfolioLength,
      activePage: 1,
    });
  };

  //페이지 변경될때 호출되는 메소드
  handleOnPageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  //모달창 상태 변경 메소드
  toggleModal = (idx) => {
    const { portfolioModal, showPortfolioArr } = this.state;
    let portfolioInfo = showPortfolioArr.find((elem) => elem.idx === idx); //선택 된 포트폴리오 정보 모달로 넘겨주기 위해

    this.setState({
      portfolioModal: !portfolioModal,
      portfolioInfo: portfolioInfo,
    });
  };

  render() {
    const { showPortfolioArr, portfolioModal, portfolioInfo } = this.state;
    const { totalCount, rowCount, activePage } = this.state;

    let filterList = ["전체", "웹/모바일", "편집디자인", "기타"];
    let filterComp = filterList.map((filter, idx) => {
      return (
        <div
          className="filter"
          onClick={() => {
            this.handleOnFilterClick(idx);
          }}
        >
          {filter}
        </div>
      );
    });

    let portfolioComp = (showPortfolioArr || []).map((portfolio, idx) => {
      return (
        <div>
          <div
            className="screen"
            onClick={() => this.toggleModal(portfolio.idx)}
          >
            <span />
            <span />
            <span />
            <span />
            <div>{portfolio.title}</div>
            <img src={portfolio.image} />
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
            onPageChange={this.handleOnPageChange}
            total={totalCount}
            rowCount={rowCount}
            currentPage={activePage}
          />
          {portfolioModal && (
            <PortfolioModal
              show={portfolioModal}
              toggle={this.toggleModal}
              portfolioInfo={portfolioInfo}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
