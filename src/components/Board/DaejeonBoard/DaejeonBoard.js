import React, { Component } from "react";
import './DaejeonBoard.scss';
import './DaejeonNav.scss';
import { FaPhabricator, FaRegCommentAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

/* eslint-disable */

class DaejeonBoard extends Component {
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
  }

  render() {
    const { isTimeOrder } = this.state
    const { daejeonList, history, requestTimeList, popularDaejeonList } = this.props;
    let daejeonItem;
    if (!isTimeOrder) {
        daejeonItem = daejeonList.map((data, index) => {
      let { idx, title, region, view, created_at } = data;
      return (
        <div className="BoardPage-List" key ={index}>
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
            <span className="BoardPage-List-Time">{created_at}</span>
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
    })
  }

  else if (isTimeOrder) {
    daejeonItem = popularDaejeonList.map((data, index) => {
      let { idx, title, region, view, created_at } = data;
      return (
        <div className="BoardPage-List" key ={index}>
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
            <span className="BoardPage-List-Time">{created_at}</span>
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
    })
  }
    return (
      <>
        <div className="DaejeonNav">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>코로나, 여기</h3>
              </div>

              <ul class="list-unstyled components">
                <p>Corona?</p>
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
                  <a href="#">문의/질문</a>
                </li>
              </ul>
              <ul class="list-unstyled CTAs">
                <li>
                  <a>지역 콜센터 120</a>
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
              <div className="DaejeonBoard">
                <div className="DaejeonBoard-TitleZone">
                  <span className="DaejeonBoard-Title">
                    대전 정보 공유 게시판
                  </span>
                </div>

                <div className="Board-Button">
                  <button
                    className="Board-Button-Button"
                    onClick={() => (window.location = "/BoardInsert")}
                  >
                    글쓰기
                  </button>
                  <button className="Board-Button-Button" onClick ={() => {
                    requestTimeList(),
                    this.setState({ isTimeOrder: !isTimeOrder })
                  }}>{
                    isTimeOrder ? <span>인기순</span> : <span>최신순</span>
                  }</button>
                </div>

                <div className="DaejeonBoard-NoticeZone">
                  <span className="DaejeonBoard-Notice">공지</span>
                  <span className="DaejeonBoard-NoticeContents">
                    익명 게시판입니다. 비방, 욕설 등은 삼가해주세요.
                  </span>
                </div>

                <div className="DaejeonBoard-List">{daejeonItem}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DaejeonBoard);
