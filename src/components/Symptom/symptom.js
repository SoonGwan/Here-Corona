//의심 증상
import React, { useEffect } from 'react';
import './symptom.scss';

import { FaLongArrowAltDown } from "react-icons/fa";

import symptom1 from 'asset/images/symptom1.png';
import symptom2 from 'asset/images/symptom2.png';
import symptom3 from 'asset/images/symptom3.png';
import symptomMain from 'asset/images/symptomMain.jpg';
import $ from 'jquery';

const Symptom =({ history })=> {
  useEffect(() => {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }, [])
    return(
        <>
        <div className="allType1">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <h3>메로나, 여기</h3>
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
                <li class="active">
                  <a
                    onClick={() => {
                      history.push("/worldWide");
                    }}
                  >
                    전세계 현황
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" aria-expanded="false">
                    국내 사망자 현황
                  </a>
                </li>
                <li>
                  <a>격리 해제 현황</a>
                </li>
                <li>
                  <a>지역 공유 게시판</a>
                </li>
                <li
                  onClick={() => {
                    history.push("/symptom");
                  }}
                >
                  <a>의심 증상</a>
                </li>
                <li>
                  <a>자영업자 장터</a>
                </li>
                <li>
                  <a>문의 질문</a>
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
                  </div>
                </div>
              </nav>

            <div className="symptom-title">신종 코로나 바이러스 의심 증상</div>
            <img src={symptomMain} className="symptom-MainImage"/>
            
            <div className="symptom-list">
                <li className="symptom-item">숨 쉬는게 힘들 정도의 마른 기침</li>
                <li className="symptom-item">37.5도 이상의 발열</li>
                <li className="symptom-item">음식 섭취 시 아픈 목</li>
                <li className="symptom-item">구토와 설사, 복통</li>
                <li className="symptom-item">온몸이 뻐근하고 아픈 근육통</li>
                <FaLongArrowAltDown className="symptom-icon"/>
            </div>
                    <div className="symptom-imageZone">
                    <img src={symptom1} className="symptom-image"/>
                    <img src={symptom2} className="symptom-image"/>
                    <img src={symptom3} className="symptom-image"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Symptom; 