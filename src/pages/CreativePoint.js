import './CreativePoint.css';
import './Privacy_Policy.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import {
    images,
    useLanguageManager,
    defaultTexts,
    SkillList,
    cp_screenshots
 } from './Utils'


function CreativePoint() {

    const navBtnRef = useRef(null);
    const btnListRef = useRef(null);

    const { texts, language } = useLanguageManager();

    const displayTexts = texts[language] || defaultTexts;

    const pj_skill1 = ["Unity Engine", "Visual Studio", "C#", "Json", "Google Admob", "Adobe Photoshop", "GitHub"];
    const pj_skill2 = ["Unity Engine", "Visual Studio", "C#", "Json", "Google Admob", "Adobe Photoshop", "GitHub"];
    const pj_skill3 = ["Unity Engine", "Visual Studio", "C#", "Json", "Google Admob", "Adobe XD", "Adobe Photoshop", "GitHub"];

    return(
        <div className="PJ_Main">
            <div className="project_finder">
                <div className="pf_1">Creative Point</div>
                <div className="pf_2">Life Lotto</div>
                <div className="pf_3">Endless Mansion</div>
            </div>
            <div className="pp_headerBg">
                <div className="pj_gradientOverlay"></div>
                <div className="pp_navBar">
                    <div className="logo">
                        <img src={images[0]} alt="Logo Img" className="logoImg"/>
                    </div>
                    <div className="btnClass" ref={btnListRef}>
                        <Link to="/" className="Btn1">{displayTexts.home}</Link>
                        <Link to="/Projects" className="Btn2">{displayTexts.projects}</Link>
                        <Link to="/Privacy_Policy" className="Btn3">{displayTexts.privacyPolicy}</Link>
                    </div>
                    <div className="menuBtn" ref={navBtnRef}></div>  
                </div>
                <p className="p_Title">{displayTexts.projects}</p>
            </div>
            <div className="empty_space"></div>
            <div className="pj_div1">
                <div className="pj_intro">
                    <img src={images[0]} alt="creativePointImg" className="pj_img"></img>
                    <div className="pj_info">
                        <p className="playstore">구글 플레이스토어</p>
                        <p className="pj_title">Creative Point</p>
                        <p className="pj_duration">2020.05 - 2020.10</p>
                        <p className="pj_member">개인 프로젝트</p>
                    </div>
                </div>
                <div className="pj_skill">
                    <SkillList skills={pj_skill1}/>
                </div>
                <div className="pj_abstract">
                    <p>Creative Point는 기존의 고정관념에서 벗어나 창의적인 사고방식으로 접근하여 문제를 해결하는 퀴즈 어플리케이션입니다</p>
                </div>
                <div className="pj_devProcess">
                    <div className="devP_title">개발 진행</div>
                    <div className="devP_container">
                        <div className="devP_content">
                            <img src={images[0]} className="devP_img1" alt="creativePoint json img"></img>
                            <img src={images[1]} className="devP_img2"></img>
                            <div className="devP_text">개발 내용 텍스트</div>
                        </div>
                    </div>
                </div>
                <div className="pj_devFunction">
                    <div className="devP_title">핵심 기능</div>
                    <div className="devF_container">
                        <div className="func1">
                            <div className="func1_imgCont">
                                <img className ="func_img" src={cp_screenshots[1]} alt="function Img"></img>
                                <img className ="func_img2" src={cp_screenshots[0]} alt="function Img"></img>
                            </div>
                            <div className ="func_txt">
                                <div className="func_title">Json을 활용한 플레이어 데이터 저장 및 로드</div>
                                <div className="func_info">HELLOOOO</div> 
                            </div>                    
                        </div>
                        <div className="func2">
                            <div className="func_title">플레이어 데이터에 기반한 스테이지 활성화/비활성화</div>
                            <img className ="func_img" src={cp_screenshots[2]} alt="function Img"></img>
                            <img className ="func_img" src={cp_screenshots[3]} alt="function Img"></img>
                            <div className ="func_txt">
                                
                                <div className="func_info">HELLOOOO</div> 
                            </div>   
                        </div>
                        <div className="func3">
                            <img className ="func_img1" src={cp_screenshots[6]} alt="function Img"></img>
                            <img className ="func_img2" src={cp_screenshots[5]} alt="function Img"></img>
                            <img className ="func_img3" src={cp_screenshots[4]} alt="function Img"></img>
                            <div className ="func_txt">
                                <div className="func_title">Google Admob 광고 시청 여부에 따른 힌트 제공 및 데이터 관리</div>
                                <div className="func_info">HELLOOOO</div> 
                            </div>   
                        </div>
                        <div className="func4">
                            <img className ="func_img" src={cp_screenshots[7]} alt="function Img"></img>
                            <div className ="func_txt">
                                <div className="func_title">시스템 언어에 기반한 기본 언어 설정 및 선호 언어 선택 (영어/한국어) </div>
                                <div className="func_info">HELLOOOO</div> 
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default CreativePoint;