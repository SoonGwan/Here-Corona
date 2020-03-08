/* eslint-disable */

import React from "react";
import { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sample.scss";
import $ from "jquery";
import "./styleSample.scss";
import { Icon } from "@class101/ui";
import { IoMdAddCircleOutline, IoMdArrowRoundForward } from "react-icons/io";
import ColumnChart from "../Chart/Chart";
import { SERVER } from "../../config/server.json";
import axios from "axios";
import Moment from "moment";
import { Callout, CalloutStatus } from "@class101/ui";
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: "",
      confirmedUp: "",
      check: "",
      checkUp: "",
      heal: "",
      healUp: "",
      death: "",
      deathUp: "",
      time: ""
    };
  }

  // render() {
  //   return (
  //     <>
  //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //         <Navbar.Brand href="#home"></Navbar.Brand>
  //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //         <Navbar.Collapse id="responsive-navbar-nav">
  //           <Nav className="mr-auto">
  //             <Nav.Link href="#features">Features</Nav.Link>
  //             <Nav.Link href="#pricing">Pricing</Nav.Link>

  //             <Nav.Link href="#deets">More deets</Nav.Link>
  //             <Nav.Link eventKey={2} href="#memes">
  //               Dank memes
  //             </Nav.Link>
  //           </Nav>
  //           {/* <Nav>
  //             <Nav.Link href="#deets">More deets</Nav.Link>~`~
  //             <Nav.Link eventKey={2} href="#memes">
  //               Dank memes
  //             </Nav.Link>
  //           </Nav> */}
  //         </Navbar.Collapse>
  //       </Navbar>
  //       색상나오고 마추면 될거임 빨간색은 그냥 보이기 쉬운 색으로 만들어서
  //       나중에 색 나오면 바꾸면 될듯
  //     </>
  //   );
  // }
  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
    let getinfectee = async () => {
      await axios.get(`${SERVER}/api/infectee/total`).then(response => {
        this.setState({
          confirmed: response.data.data.total_state.confirmed,
          confirmedUp: response.data.data.total_state.last_confirmed,
          check: response.data.data.total_state.check,
          checkUp: response.data.data.total_state.last_check,
          heal: response.data.data.total_state.heal,
          healUp: response.data.data.total_state.last_heal,
          death: response.data.data.total_state.death,
          deathUp: response.data.data.total_state.last_death,
          time: Moment(
            response.data.data.total_state.last_update,
            "llll"
          ).format("YYYY-MM-DD h:mm a")
        });
      });
    };
    getinfectee();
  }

  handleChangeSite() {
    console.log("test");
  }
  render() {
    return (
      <div className="allType123">
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>여기 코로나</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Here Corona</p>
              <li class="active">
                <a
                  data-toggle="collapse"
                  aria-expanded="false"
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                >
                  국내현황
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.props.history.push("/worldWide");
                  }}
                >
                  전세계 현황
                </a>

                <a
                  onClick={() => {
                    this.props.history.push("/passed");
                  }}
                >
                  국내 사망자 현황
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.props.history.push("/healed");
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
                      this.props.history.push("/NationWideBoard");
                    }}
                  >
                    <a>전국</a>
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/DaeguBoard");
                    }}
                  >
                    <a>대구</a>
                  </li>
                  <li
                    class="active"
                    onClick={() => {
                      this.props.history.push("/BusanBoard");
                    }}
                  >
                    <a>부산</a>
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/SeoulBoard");
                    }}
                  >
                    <a>서울</a>
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/GwangjuBoard");
                    }}
                  >
                    <a>광주</a>
                  </li>
                  <li
                    onClick={() => {
                      this.props.history.push("/DaejeonBoard");
                    }}
                  >
                    <a>대전</a>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => {
                  this.props.history.push("/symptom");
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
                <a>(지역번호)-120</a>
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
            {/* <div className="twoBoxalign"> */}
            <Callout title="공지사항" status={CalloutStatus.DEFAULT}>
              간혹 업데이트가 간헐적으로 지연되는 현상이 발생하고 있습니다.{" "}
              <br />
              저희는 코로나19에 맞서 싸우고 계신 모든 분들을 응원합니다!
            </Callout>
            <div className="firstBox">
              <div className="mainplusBox">
                <div className="mainText">
                  국내 <br />
                  확진자
                </div>
                <div className="plus">
                  <div
                    className="pressCircle"
                    onClick={() => {
                      this.props.history.push("/social");
                    }}
                  >
                    {/* <IoMdAddCircleOutline className="circleInPlus" /> */}
                  </div>
                </div>
              </div>
              <br />
              <div className="peoplePoint">
                {this.state.confirmed}
                <b className="smallText">(▲{this.state.confirmedUp})</b>명
              </div>
            </div>
            <div className="secondBox">
              <div className="mainplusBox">
                <div className="mainText">
                  검사 <br /> 진행중
                </div>
                <div className="plus">
                  {/* <IoMdAddCircleOutline className="circleInPlus" /> */}
                </div>
              </div>
              <br />
              <div className="peoplePoint">
                {this.state.check}
                <b className="smallText"></b>명
              </div>
            </div>
            {/* </div> */}
            {/* <div class="line"></div> */}

            {/* <div></div> */}
            {/* <div class="line"></div> */}
            <div className="thirdBox">
              <div className="mainplusBox">
                <div className="mainText">격리 해제</div>
                <div className="plus">
                  {/* <IoMdAddCircleOutline className="circleInPlus" /> */}
                </div>
              </div>
              <br />
              <div className="peoplePoint">
                {this.state.heal}
                <b className="smallText">(▲{this.state.healUp})</b>명
              </div>
            </div>
            {/* <div class="line"></div> */}
            <div className="fourthBox">
              <div className="mainplusBox">
                <div className="mainText">사망자</div>
                <div className="plus">
                  {/* <IoMdAddCircleOutline className="circleInPlus" /> */}
                </div>
              </div>
              <br />
              <div className="peoplePoint">
                {this.state.death}
                <b className="smallText">(▲{this.state.deathUp})</b> 명
              </div>
            </div>
            <br />
            <div className="lastgetUpdate">
              전체 업데이트: {this.state.time}
            </div>

            <div class="line"></div>
            <ColumnChart />
            <div
              className="firstBoxLong"
              onClick={() => {
                this.props.history.push("/social");
              }}
            >
              <div className="mainplusBox">
                <div className="mainText">
                  지금 우리 <br />
                  지역은 ?
                </div>
                <div className="plus">
                  <div
                    className="pressCircle"
                    onClick={() => {
                      this.props.history.push("/social");
                    }}
                  >
                    {/* 다른지역
                    <IoMdArrowRoundForward className="circleInPlus" /> */}
                  </div>
                </div>
              </div>
              <div className="peoplePoint" id="noned">
                우리 지역 알아보기
                <IoMdArrowRoundForward className="circleInPlus" />
              </div>
              <br />
            </div>
            <div
              className="secondBoxLong"
              onClick={() => {
                this.props.history.push("/market");
              }}
            >
              <div className="mainplusBox">
                <div className="mainText">자영업자 장터</div>
                <div className="plus">
                  <div
                    className="pressCircle"
                    onClick={() => {
                      this.props.history.push("/social");
                    }}
                  >
                    {/* 다른지역
                    <IoMdArrowRoundForward className="circleInPlus" /> */}
                  </div>
                </div>
              </div>
              <div className="peoplePoint" id="noned">
                구경하러 가기
                <IoMdArrowRoundForward className="circleInPlus" />
              </div>
              <br />
            </div>

            <div
              className="thirdBoxLong"
              onClick={() => {
                this.props.history.push("/NationWideBoard");
              }}
            >
              <div className="mainplusBox">
                <div className="mainText">
                  지역공유
                  <br />
                  계시판
                </div>
                <div className="plus">
                  <div
                    className="pressCircle"
                    onClick={() => {
                      this.props.history.push("/social");
                    }}
                  >
                    {/* 다른지역
                    <IoMdArrowRoundForward className="circleInPlus" /> */}
                  </div>
                </div>
              </div>
              <div className="peoplePoint" id="noned">
                지역공유 계시판 바로가기
                <IoMdArrowRoundForward className="circleInPlus" />
              </div>
              <br />
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
