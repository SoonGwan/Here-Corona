import React, { Component, useRef } from "react";
import "./BusanBoard.scss";
import { FaBars, FaPen, FaPhabricator, FaRegCommentAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BusanNav.scss";
import { Callout, CalloutStatus } from "@class101/ui";
import $ from "jquery";

/* eslint-disable */

class BusanBoard extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }

  state = {
    isTimeOrder: false
  };

  render() {
    const { isTimeOrder } = this.state;
    const {
      busanList,
      history,
      requestTimeList,
      popularBusanList
    } = this.props;
    let busanItem;
    const sub = document.getElementsByClassName("BoardPage-List-Time");

    function timeBefore(parameterTime) {
      let now = new Date();
      let sec;
      let day;
      let hour;
      let min;
      let writeDay = new Date(parameterTime);

      let minus; //현재 년도랑 글쓴시간의 년도 비교
      if (now.getFullYear() > writeDay.getFullYear()) {
        minus = now.getFullYear() - writeDay.getFullYear();
        sub.innerHTML = minus + "년 전";
      } else if (now.getMonth() > writeDay.getMonth()) {
        minus = now.getMonth() - writeDay.getMonth();
        sub.innerHTML = minus + "달 전";
      } else if (now.getDate() > writeDay.getDate()) {
        minus = now.getDate() - writeDay.getDate();
        sub.innerHTML = minus + "일 전";
      } else if (now.getDate() == writeDay.getDate()) {
        let nowTime = now.getTime();
        let writeTime = writeDay.getTime();
        if (nowTime > writeTime) {
          //시간을 비교
          sec = parseInt(nowTime - writeTime) / 1000;
          day = parseInt(sec / 60 / 60 / 24);
          sec = sec - day * 60 * 60 * 24;
          hour = parseInt(sec / 60 / 60);
          sec = sec - hour * 60 * 60;
          min = parseInt(sec / 60);
          sec = parseInt(sec - min * 60);
          if (hour > 0) {
            sub.innerHTML = hour + "시간 전";
          } else if (min > 0) {
            sub.innerHTML = min + "분 전";
          } else if (sec > 0) {
            sub.innerHTML = sec + "초 전";
          }
        }
      }
    }

    if (!isTimeOrder) {
      busanItem = busanList.map((data, index) => {
        let { idx, title, region, view, created_at } = data;
        timeBefore(created_at);
        return (
          <div className="BoardPage-List" key={index}>
            <span className="BoardPage-List-Location">지역: {region}</span>
            <Link
              to="/BoardPage"
              onClick={() => {
                sessionStorage.setItem("index", idx);
              }}
              className="BoardPage-List-Item"
            >
              제목: {title}
            </Link>

            <div>
              <span className="BoardPage-List-Time">{sub.innerHTML}</span>
              <div className="BoardPage-Info">
                <span className="BoardPage-List-View">
                  <FaPhabricator />
                  {view}
                </span>
                <FaRegCommentAlt />
              </div>
            </div>

            <hr className="BoardPage-Line" />
          </div>
        );
      });
    } else if (isTimeOrder) {
      busanItem = popularBusanList.map((data, index) => {
        let { idx, title, region, view, created_at } = data;
        timeBefore(created_at);
        return (
          <div className="BoardPage-List" key={index}>
            <span className="BoardPage-List-Location">지역: {region}</span>
            <Link
              to="/BoardPage"
              onClick={() => {
                sessionStorage.setItem("index", idx);
              }}
              className="BoardPage-List-Item"
            >
              제목: {title}
            </Link>

            <div>
              <span className="BoardPage-List-Time">{sub.innerHTML}</span>
              <div className="BoardPage-Info">
                <span className="BoardPage-List-View">
                  <FaPhabricator />
                  {view}
                </span>
                <FaRegCommentAlt />
              </div>
            </div>

            <hr className="BoardPage-Line" />
          </div>
        );
      });
    }
    return (
      <>
        <div className="BusanNav">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>여기 코로나</h3>
              </div>

              <ul class="list-unstyled components">
                <p>Here Corona</p>
                <li>
                  <a
                    data-toggle="collapse"
                    aria-expanded="false"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    국내현황
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push("/worldWide");
                    }}
                  >
                    전세계 현황
                  </a>

                  <a
                    onClick={() => {
                      history.push("/passed");
                    }}
                  >
                    국내 사망자 현황
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push("/healed");
                    }}
                  >
                    국내 격리 해제 현황
                  </a>
                </li>
                <li>
                  <a
                    href="#pageSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    class="dropdown-toggle"
                  >
                    지역 공유 게시판
                  </a>
                  <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li
                      onClick={() => {
                        history.push("/NationWideBoard");
                      }}
                    >
                      <a>전국</a>
                    </li>
                    <li
                      onClick={() => {
                        history.push("/DaeguBoard");
                      }}
                    >
                      <a>대구</a>
                    </li>
                    <li
                      class="active"
                      onClick={() => {
                        history.push("/BusanBoard");
                      }}
                    >
                      <a>부산</a>
                    </li>
                    <li
                      onClick={() => {
                        history.push("/SeoulBoard");
                      }}
                    >
                      <a>서울</a>
                    </li>
                    <li
                      onClick={() => {
                        history.push("/GwangjuBoard");
                      }}
                    >
                      <a>광주</a>
                    </li>
                    <li
                      onClick={() => {
                        history.push("/DaejeonBoard");
                      }}
                    >
                      <a>대전</a>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={() => {
                    history.push("/symptom");
                  }}
                >
                  <a>의심 증상</a>
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/market");
                  }}
                >
                  <a>자영업자 장터</a>
                </li>
                <li>
                  <a href="https://open.kakao.com/o/swwGCL0b" target="_blank">
                    문의/질문
                  </a>
                </li>
              </ul>
              <ul class="list-unstyled CTAs">
                <li>
                  <a>(지역번호)-120</a>{" "}
                </li>
                <li>
                  <a>콜센터 1339</a>
                </li>
              </ul>
            </nav>

            <div id="content">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <button
                    class="btn btn-dark d-inline-block d-lg-none ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-align-justify"></i>
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Page
                      </a>
                    </li>
                  </ul> */}
                  </div>
                </div>
              </nav>
              <div className="BusanBoard">
                <div className="BusanBoard-TitleZone">
                  <span className="BusanBoard-Title">
                    부산 정보 공유 게시판
                  </span>
                </div>

                <div className="Board-Button">
                  <button
                    className="Board-Button-Button"
                    onClick={() => (window.location = "/BoardInsert")}
                  >
                    글쓰기
                  </button>
                  <button
                    className="Board-Button-Button"
                    onClick={() => {
                      requestTimeList(),
                        this.setState({ isTimeOrder: !isTimeOrder });
                    }}
                  >
                    {isTimeOrder ? <span>인기순</span> : <span>최신순</span>}
                  </button>
                </div>

                <div className="BusanBoard-NoticeZone">
                  <Callout title="공지사항" status={CalloutStatus.DEFAULT}>
                    간혹 업데이트가 간헐적으로 지연되는 현상이 발생하고
                    있습니다. <br />
                    저희는 코로나19에 맞서 싸우고 계신 모든 분들을 응원합니다!
                  </Callout>
                </div>

                <div className="BusanBoard-List">{busanItem}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BusanBoard);
