import React from "react";
import "./AdminPage.scss";
import TextField from "@material-ui/core/TextField";

const clickChange = () => {
  let localitem = localStorage.getItem("x-access-token");
  if (localitem === null) {
    window.alert("관리자만 수정 가능합니다.");
    window.location = "/";
  } else {
    window.alert("성공");
    window.location = "/";
  }
};
const AdminPage = ({
  requestAdminPage,
  red,
  setRed,
  orange,
  setOrange,
  blue,
  setBlue,
  black,
  setBlack
}) => {
  return (
    <form onSubmit={requestAdminPage}>
      <h3 className="kor-title">국내</h3>
      <h4 className="k1">확진자</h4>
      <TextField
        className="kor-1"
        value={red}
        onChange={e => setRed(e.target.value)}
      />

      <h4 className="k2">검사중</h4>
      <TextField
        className="kor-1"
        value={orange}
        onChange={e => setOrange(e.target.value)}
      />

      <h4 className="k3">격리해제</h4>
      <TextField
        className="kor-1"
        value={blue}
        onChange={e => setBlue(e.target.value)}
      />

      <h4 className="k4">사망자</h4>
      <TextField
        className="kor-1"
        value={black}
        onChange={e => setBlack(e.target.value)}
      />

      <button
        className="save"
        onClick={clickChange}
        onSubmit={requestAdminPage}
      >
        수정하기
      </button>
    </form>
  );
};

export default AdminPage;
