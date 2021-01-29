import React, { Component } from "react";
import portfolioImg01 from "../../images/portfolio_img01.png";
import portfolioImg02 from "../../images/portfolio_img02.png";
import portfolioImg03 from "../../images/portfolio_img03.png";
import portfolioImg04 from "../../images/portfolio_img04.png";
import portfolioImg05 from "../../images/portfolio_img05.png";
import portfolioImg06 from "../../images/portfolio_img06.png";
import portfolioImg07 from "../../images/portfolio_img07.png";
import Pagination from "components/Pagination";
import PortfolioModal from "components/PortfolioModal/PortfolioModal";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArr: [
        {
          idx: 1,
          image: portfolioImg01,
          filterVal: ["web"],
          subTitle: "Web",
          title: "반응형 웹 포트폴리오",
          period: "2020.11 - 2020.01",
          ide: "VS Code",
          join: "2",
          contents: ["✔ React, scss 공부 겸 웹 포트폴리오 프로젝트 진행"],
          fontColor: "black", //배경색 어두운색일때 흰색으로 하고 아닐때 검정색으로 하기위해 추가
        },
        {
          idx: 2,
          image: portfolioImg02,
          filterVal: ["android", "web"],
          subTitle: "Android & Web",
          title: "KT GIGA 스마트팜(통합관제시스템)",
          period: "2018.06 - 2020.09",
          ide: "Android Studio / VS Code",
          join: "5",
          contents: [
            "✔ App 사용자 디바이스 등록 기능",
            "✔ App Notification 기능",
            "✔ App 실시간 모니터링 기능",
            "✔ 실시간 모니터링, 이벤트 영상조회,",
            "　　영농일지 관련 화면, 페로몬트랩화면",
            "ㅤㅤReact 사용하여 Web Client 개발",
            "✔ RESTFull API 사용",
          ],
          fontColor: "black",
        },
        {
          idx: 3,
          image: portfolioImg03,
          filterVal: ["android", "web"],
          subTitle: "Android & Web",
          title: "Supervisor(ARGOS RPA+)",
          period: "2019.05 - 2019.07",
          ide: "Android Studio / VS Code",
          join: "6",
          contents: [
            "✔ 알림 설정 화면, On-demand 화면 Vue 사용하여 Web Client 개발",
          ],
          fontColor: "black",
        },
        {
          idx: 4,
          image: portfolioImg04,
          filterVal: ["android"],
          subTitle: "Android",
          title: "HUDVoca(Head Up Display Vocabulary)",
          period: "2019.09 - 2019.11",
          ide: "Android Studio",
          join: "2",
          contents: [
            "✔ 차량 앞 유리창에 반사하여 공부 가능한 영단어 Application",
            "✔ 5초, 30초, 1분, 5분 시간 설정하여 영단어가 자동으로 넘어가는 기능",
            "✔ 일반모드, 차량모드 지원",
            "✔ Google Play Store 등록",
          ],
          fontColor: "black",
        },
        {
          idx: 5,
          image: portfolioImg05,
          filterVal: ["android"],
          subTitle: "Android",
          title: "KT 농산물 이력정보 제공 서비스",
          period: "2018.01 - 2018.04",
          ide: "Android Studio",
          join: "4",
          contents: [
            "✔ 도매유통 디지털화 한 Application",
            "✔ 각 사용자 계정(APC, 하역업체,",
            "　　도매법인, 중도매인)에 맞는 메뉴 UI 지원",
            "✔ 바코드 스캔 기능",
            "✔ 전자문서 작성 및 관리 기능(전자송품장, 주문표 등)",
          ],
          fontColor: "black",
        },
        {
          idx: 6,
          image: portfolioImg06,
          filterVal: ["android"],
          subTitle: "Android",
          title: "GPOP(Global POP)",
          period: "2016.11 - 2017.01",
          ide: "ADT(Eclipse)",
          join: "3",
          contents: [
            "✔ 현재 연결된 네트워크 속도 측정 Application",
            "✔ 현재 네트워크의 Ping, Upload, Download 속도 측정 및 결과 조회",
            "✔ Trace Route 측정 및 측정 결과 조회",
          ],
          fontColor: "white",
        },
        {
          idx: 7,
          image: portfolioImg07,
          filterVal: ["android"],
          subTitle: "Android",
          title: "Go!Dutch",
          period: "2016.03 - 2016.03",
          ide: "Android Studio",
          join: "1",
          contents: [
            "✔ 가격과 인원수를 입력하여 더치페이",
            "　　가격을 계산해 주는 Application",
            "✔ 더치페이 된 가격, 은행명, 계좌번호를",
            "　　카카오톡으로 전송 가능",
            "✔ Admob 라이브러리 사용(광고)",
            "✔ Kakao API 사용",
            "✔ Google Play Store 등록",
          ],
          fontColor: "white",
        },
        // {
        //   idx: 8,
        //   image: portfolioTest,
        //   filterVal: ["android"],
        //   subTitle: "Andriod",
        //   title: "Travel Diary",
        //   period: "2015.09 - 2015.09",
        //   ide: "ADT(Eclipse)",
        //   join: "1",
        //   contents: [
        //     "✔ 여행을 다니며 사진을 찍고, 추억을 실시간으로 기록하는 Application",
        //     "✔ SQLite 사용하여 데이터 저장",
        //     "✔ 등록된 여행 날짜의 1년 뒤 같은 날짜에 푸시 알림으로 표시",
        //     "✔ 글 메모, 카메라 메모 기능",
        //     "✔ 메모 기능의 글자 속성 변경 기능",
        //   ],
        //   fontColor: "black",
        // },
        // {
        //   idx: 9,
        //   image: portfolioTest,
        //   filterVal: ["android"],
        //   subTitle: "Android",
        //   title: "Nice Timer",
        //   period: "2015.05 - 2015.05",
        //   ide: "ADT(Eclipse)",
        //   join: "1",
        //   contents: [
        //     "✔ 공부 및 낮잠, 시간 개념이 없는 사람을 위한 Application",
        //     "✔ 시, 분을 입력 후 타이머가 울릴 타입(진동, 소리) 선택",
        //     "✔ 저장 후 타이머 울릴 시간 표시",
        //     "✔ 수학 연산 정답 확인을 통한 알림 중지",
        //   ],
        //   fontColor: "black",
        // },
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

    let filterList = ["전체", "안드로이드", "웹"];
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
