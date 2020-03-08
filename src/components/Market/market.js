//자영업자 장터
import React, { useEffect } from "react";

import MarketList from "components/Market/MarketList/marketList";
import { FaBars } from "react-icons/fa";
import "components/Market/market.scss";
import { Callout, CalloutStatus } from "@class101/ui";

const Market = ({ history }) => {
  useEffect(() => {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }, []);
  return (
    <>
      <div className="allType2">
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
                  history.push("/market");
                }}
                class="active"
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
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Page
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </nav>

            {/* <div className="market-title">
              <span className="market-titleText">자영업자 장터</span>
            </div> */}

            <Callout
              title="공지사항"
              status={CalloutStatus.DEFAULT}
              className="market-notice"
            >
              저희는 코로나19에 맞서 싸우고 계신 모든 분들을 응원합니다!
              자영업자 분들께 조금이라도 도움이 되고 싶어 소비자와 자영업자를
              이어주는 장터입니다. <br /> 모든 광고는 무료로 진행되며 가게등록
              및 문의는 채팅을 이용해 주시기 바랍니다.
            </Callout>

            <div className="market-list">
              <MarketList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
