import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import FullPage from "components/FullPage/FullPageF";
import Launcher from "components/Launcher/Launcher";

/**
 *  @component    App
 *  @param        none
 *  @description  App 컴포넌트
 */
const App = () => {
  /**
   *  @memberOf     App
   *  @var          {boolean} isTimeOut
   *  @description  런처 화면 보여주기 위한 상태 값
   */
  const [isTimeOut, setIsTimeOut] = useState(false);

  /**
   *  @memberOf     App
   *  @var          {boolean} pageName
   *  @description  현재 보여지는 페이지
   */
  const [pageName, setPageName] = useState(null);

  /**
   *  @memberOf     App
   *  @function     handlePageChange
   *  @param        {string} pName - 페이지 이름
   *  @return       none
   *  @description  페이지 변경될때 마다 페이지 이름 저장하는 함수
   */
  const handlePageChange = (pName) => {
    setPageName(pName);
  };

  /**
   *  @listens      [] - 최초 실행
   *  @description  2초후에 isTimeOut 값을 true로 변경해줌
   */
  useEffect(() => {
    if (!isTimeOut) {
      setTimeout(() => {
        setIsTimeOut(true);
      }, 2000);
    }
  }, []);

  return (
    <>
      {!isTimeOut && (
        <div style={{ width: "100%", height: "100%" }}>
          <Launcher />
        </div>
      )}
      {isTimeOut && (
        <div className="app-container">
          <FullPage className="full-page" handlePageChange={handlePageChange} />
          <Header showPageName={pageName} />
        </div>
      )}
    </>
  );
};

export default App;
