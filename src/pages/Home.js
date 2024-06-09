import 'animate.css/animate.min.css';
import React, { useRef} from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import '../index.css';
import './Home.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  bgImg,
  images,
  styleImg,
  cp_screenshots,
  em_screenshots,
  logoImg,
  ImageSlider,
  defaultTexts,
  useAnimateOnScroll,
  useSetNavBg,
  useTypeAnim,
  useNavBtnClick,
  useLanguageManager,
  useAnimateWidthOnScroll
  
} from './Utils';

function Home() {
  const titleRef = useRef(null);
  const navRef = useRef(null);
  const imgRef = useRef(null);
  const aboutMeRef = useRef(null);

  const navBtnRef = useRef(null);
  const btnListRef = useRef(null);

  const div4Ref = useRef(null);

 

  
  useAnimateOnScroll(titleRef);
  useSetNavBg(navRef, imgRef);
  useNavBtnClick(navBtnRef, btnListRef);
  useAnimateWidthOnScroll(div4Ref);
  

  const startTyping = useTypeAnim(aboutMeRef);

  const { texts, language } = useLanguageManager();

  const displayTexts = texts[language] || defaultTexts;

  console.log('displayTexts:', displayTexts);

  const items = [
    displayTexts.education_1 || "Graduated from Gimpo Foreign Language High School in 2018",
    displayTexts.education_2 || "Expected to graduate from Coventry University with a degree in Computer Science in 2024",
    displayTexts.experience_1 || "Completed language training in Singapore",
    displayTexts.experience_2 || "Published 2 Android applications on the Google Play Store"
  ];

  const cp_skills = [
    "Unity Engine", "C#", "Visual Studio", "Adobe Photoshop" 
  ]

  return (
    <div className="Main">
      <div className="navBar" ref={navRef}>
        <div className="logo">
          <img src={images[0]} alt="Logo Img" className="logoImg" />
        </div>
        <div className="btnClass" ref={btnListRef}>
          <Link to="/" className="Btn1">{displayTexts.home}</Link>
          <Link to="/Projects" className="Btn2">{displayTexts.projects}</Link>
          <Link to="/CreativePoint" className="Btn3">{displayTexts.privacyPolicy}</Link>
        </div>
        <div className="menuBtn" ref={navBtnRef}></div>
      </div>
      <div className="headerBg" ref={imgRef}>
        <img src={bgImg[0]} alt="Background Img" className="hdBgImg" />
        <div className="gradientOverlay"></div>
      </div>
      <div className="div1">
        <p className="titleTxt" ref={titleRef}>{displayTexts.developer}</p>
        <p className="subTitleTxt">{displayTexts.journey}</p>
        <div className="my_intro">{displayTexts.myInfo}</div>
      </div>
      <div className="div2" ref={aboutMeRef}>
        <div className="div2_1"></div>
        <div className="halfRound_border"></div>
        <div className="div2_2">
          <img className="cartoonImg" src={styleImg[0]} alt="Profile Cartoon Img"/>
        </div>
        <p className="aboutMeTxt">{displayTexts.aboutMe}</p>
        <ul className="liGroup">
          {items.map((item, index) => (
            <li className="myInfo" key={index}>
              {startTyping ? (
                <ReactTyped
                  strings={[item]}
                  typeSpeed={20}
                  backSpeed={20}
                  showCursor={true}
                />
              ) : (
                <span></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="div3">
        <p className="projectsTxt">{displayTexts.projects}</p>
        <div className="div3_1">
          <img className="bubble1" src={styleImg[1]} alt="bubble Img"></img>
          <img className="bubble2" src={styleImg[2]} alt="bubble Img"></img>
          <img className="bubble3" src={styleImg[3]} alt="bubble Img"></img>
          <img className="bubble4" src={styleImg[4]} alt="bubble Img"></img>
        </div>
        <div className="projectSubTxt">{displayTexts.pjIntro}</div>
        <div className="project_group">
          <div className="project_container">
            <ImageSlider images={cp_screenshots} screenSize="port_img"/>
            <div className="pj_info">
              <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">Creative Point</div>
              <div className="github_link">
                <button className="github_btn">
                  <img className="playstoreLogo" src={logoImg[13]} alt="Google PlayStore Logo"></img>
                  <div className="linkBtn_info">PlayStore</div>
                </button>
                <button className="github_btn">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </button>
              </div>
              <div className="project_pd">2020.05 ~ 2020.10</div>
              <div className="project_if">{displayTexts.cpInfo}</div>
              
              <div className="project_func">
                <div className="project_func_tt">{displayTexts.mainF}</div>
                <div className="project_func_items">
                  <p>{displayTexts.cpFeature1}</p>
                  <p>{displayTexts.cpFeature2}</p>
                  <p>{displayTexts.cpFeature3}</p>
                </div>
              </div>
              <div className="project_skills">
                {cp_skills.map((item, index) => (
                  <div className="skill_items" key={index}>
                    {item}
                  </div>
                ))}
              </div>
          </div>
          </div>
          <div className="project_container">
            <ImageSlider images={em_screenshots} screenSize="land_img"/>
            <div className="pj_info">
            <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">Endless Mansion</div>
              <div className="github_link">
                <button className="github_btn">
                  <img className="playstoreLogo" src={logoImg[13]} alt="Google PlayStore Logo"></img>
                  <div className="linkBtn_info">PlayStore</div>
                </button>
                <button className="github_btn">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </button>
              </div>
              <div className="project_pd">2023.11 ~ 2024.02</div>
              <div className="project_if">{displayTexts.emInfo}</div>
              
              <div className="project_func">
                <div className="project_func_tt">{displayTexts.mainF}</div>
                <div className="project_func_items">
                  <p>{displayTexts.emFeature1}</p>
                  <p>{displayTexts.emFeature2}</p>
                  <p>{displayTexts.emFeature3}</p>
                  <p>{displayTexts.emFeature4}</p>
                  <p>{displayTexts.emFeature5}</p>
                  <p>{displayTexts.emFeature6}</p>
                </div>
              </div>
              <div className="project_skills">
                {cp_skills.map((item, index) => (
                  <div className="skill_items" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="project_container">
            <ImageSlider images={images} screenSize="full_img"/>
            <div className="pj_info">
              <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">{displayTexts.portf}</div>
              <div className="github_link">
                <button className="github_btn">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </button>
                
              </div>
              <div className="project_pd">2024.05 ~ 2024.06</div>
              <div className="project_if">11111111111111111111122222222222222223333333333333344444444444445555555555555</div>
              
              <div className="project_func">
                <div className="project_func_tt">{displayTexts.mainF}</div>
                <div className="project_func_items">
                  <p>한글 / 영어 언어 선택</p>
                  <p>플레이어 데이터에 따른 다음 스테이지 활성화 / 비활성화</p>
                  <p>광고 시청에 따른 힌트 보상 제공</p>
                </div>
              </div>
              <div className="project_skills">
                {cp_skills.map((item, index) => (
                  <div className="skill_items" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;