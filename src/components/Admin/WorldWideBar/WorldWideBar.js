import React from "react";
import "./WorldWideBar.scss";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  }
};
const WorldWideBar = ({
  requestWorldWideBar,
  date,
  setDate,
  number,
  setNumber
}) => {
  return (
    <form onSubmit={requestWorldWideBar}>
      <h3 className="bar2">전세계 확진환자 현황 바그래프</h3>
      <h4 className="addbar2">추가하기</h4>
      <input
        placeholder="날짜"
        className="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        className="people"
        placeholder="사람 수"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button
        className="sub2"
        onClick={clickChange}
        onSubmit={requestWorldWideBar}
      >
        추가하기
      </button>
    </form>
  );
};

export default WorldWideBar;
