import 'animate.css/animate.min.css';
import React, { useRef } from 'react';
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
  pf_screenshots,
  logoImg,
  ImageSlider,
  defaultTexts,
  useAnimateOnScroll,
  useSetNavBg,
  useTypeAnim,
  useNavBtnClick,
  useLanguageManager,
  useAnimateWidthOnScroll,
  
  
} from './Utils';


function Home() {
  const titleRef = useRef(null);
  const navRef = useRef(null);
  const imgRef = useRef(null);
  const aboutMeRef = useRef(null);
  const navBtnRef = useRef(null);
  const btnListRef = useRef(null);

  const div4Ref = useRef(null);

  const cpRef = useRef(null);
  const emRef = useRef(null);
  const pfRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useAnimateOnScroll(titleRef);
  useSetNavBg(navRef, imgRef);
  useNavBtnClick(navBtnRef, btnListRef);
  useAnimateWidthOnScroll(div4Ref);

  const startTyping = useTypeAnim(aboutMeRef);

  const { texts, language, switchLanguage } = useLanguageManager();

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
  ];

  const em_skills = [
    "Unity Engine", "C#", "Visual Studio", "Adobe Photoshop", "Adobe XD"
  ];

  const pf_skills = [
    "React", "Java Script", "Firebase", "NoSQL", "Adobe Photoshop"
  ];

  

  return (
    <div className="Main">
      <div className="navBar" ref={navRef}>
        <div className="logo">
          <img src={images[0]} alt="Logo Img" className="logoImg" />
        </div>
        <div className="langBtn">
          <button className="lang_en" onClick={() => switchLanguage('en')}>EN</button>
          / 
          <button className="lang_kr" onClick={() => switchLanguage('ko')}>KR</button>
        </div>
        <div className="btnClass" ref={btnListRef}>
          <button className="Btn1" onClick={() => scrollToRef(aboutMeRef)}>{displayTexts.aboutMe}</button>
          <button className="Btn2" onClick={() => scrollToRef(cpRef)}>Creative Point</button>
          <button className="Btn3" onClick={() => scrollToRef(emRef)}>Endless Mansion</button>
          <button className="Btn4" onClick={() => scrollToRef(pfRef)}>{displayTexts.portf}</button>
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
                <span>{item}</span>
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
          <div className="project_container pj1" ref={cpRef}>
            <ImageSlider images={cp_screenshots} screenSize="port_img"/>
            <div className="pj_info">
              <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">Creative Point</div>
              <div className="github_link">
                <a className="github_btn" href="https://play.google.com/store/apps/details?id=com.LKGenius.CreativePoint" target="_blank" rel="noopener noreferrer">
                  <img className="playstoreLogo" src={logoImg[13]} alt="Google PlayStore Logo"></img>
                  <div className="linkBtn_info">PlayStore</div>
                </a>
                <a className="github_btn" href="https://github.com/Lukasoh/CreativePoint" target="_blank" rel="noopener noreferrer">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </a>
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

          <div className="project_container pj2" ref={emRef}>
            <ImageSlider images={em_screenshots} screenSize="land_img"/>
            <div className="pj_info">
              <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">Endless Mansion</div>
              <div className="github_link">
                <a className="github_btn" href="https://github.com/Lukasoh/EndlessMansion" target="_blank" rel="noopener noreferrer">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </a>
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
                {em_skills.map((item, index) => (
                  <div className="skill_items" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project_container pj3" ref={pfRef}>
            <ImageSlider images={pf_screenshots} screenSize="full_img"/>
            <div className="pj_info">
              <div className="project_mb">{displayTexts.solo}</div>
              <div className="project_tt">{displayTexts.portf}</div>
              <div className="github_link">
                <a className="github_btn" href="https://github.com/Lukasoh/MyInfo_Web" target="_blank" rel="noopener noreferrer">
                  <img className="githubLogo" src={logoImg[8]} alt="GitHub Logo"></img>
                  <div className="linkBtn_info">GitHub</div>
                </a>
              </div>
              <div className="project_pd">2024.05 ~ 2024.06</div>
              <div className="project_if">{displayTexts.pfInfo}</div>
              
              <div className="project_func">
                <div className="project_func_tt">{displayTexts.mainF}</div>
                <div className="project_func_items">
                  <p>{displayTexts.pfLang}</p>
                  <p>{displayTexts.pfSi}</p>
                  <p>{displayTexts.pfIntro}</p>
                  <p>{displayTexts.pfLink}</p>
                </div>
              </div>
              <div className="project_skills">
                {pf_skills.map((item, index) => (
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