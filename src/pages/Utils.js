//React useState
import React, { useEffect, useState, useRef } from 'react';

//Excel Data
import * as XLSX from 'xlsx';

//React useLocation
import { useLocation } from 'react-router-dom';

//Main Page Header Images
import backgroundImg from '../assets/BackgroundImg.png';
import codingImg from '../assets/Coding.png';

//Background Images
import SkillsBgImg from '../assets/Aurora.png';

//Style Images
import borderStyleImg from '../assets/BorderStyle1.png';
import profileCartoonImg from '../assets/ProfileCartoon.png';
import bubble1 from '../assets/Bubble1.png';
import bubble2 from '../assets/Bubble2.png';
import bubble3 from '../assets/Bubble3.png';
import bubble4 from '../assets/Bubble4.png';

//Project Images
import lukiki from '../assets/LukikiLogo.png';
import profileImg from '../assets/CreativePoint.png';
import image1 from '../assets/LottoImg.png';
import image2 from '../assets/EndlessMansionImg.png';

//Logo Images
import csharplogo from '../assets/CsharpLogo.png';
import unitylogo from '../assets/UnityLogo.png';
import vscodelogo from '../assets/VsCodeLogo.png';
import vslogo from '../assets/VsLogo.png';
import csslogo from '../assets/CSSLogo.png';
import htmllogo from '../assets/HTMLLogo.png';
import javalogo from '../assets/JavaLogo.png';
import jsplogo from '../assets/JSPLogo.png';
import photoshoplogo from '../assets/AdobePhotoshopLogo.png';
import xdlogo from '../assets/AdobeXDLogo.png';
import pythonlogo from '../assets/PythonLogo.png';
import githublogo from '../assets/GitHubLogo.png';
import eclipselogo from '../assets/EclipseLogo.png';
import playstorelogo from '../assets/Playstore.png';

//Button Images
import backBtn from '../assets/BackBtn.png';
import nextBtn from '../assets/NextBtn.png';

//Creative Point Screenshots
import cp_stage1 from '../assets/CP_stage.png';
import cp_stage2 from '../assets/CP_stage2.png';
import cp_hint1 from '../assets/CP_hint1.png';
import cp_hint2 from '../assets/CP_hint2.png';
import cp_hint3 from '../assets/CP_hint3.png';
import cp_lang from '../assets/CP_Lang.png';
import cp_quiz from '../assets/CP_quiz.png';

//Endless Mansion Screenshots
import em_anim from '../assets/EM_anim.png';
import em_guideline from '../assets/EM_guideline.png';
import em_hint from '../assets/EM_hint.png';
import em_inventory from '../assets/EM_inventory.png';
import em_main1 from '../assets/EM_main1.png';
import em_main2 from '../assets/EM_main2.png';
import em_scene1 from '../assets/EM_scene.png';
import em_scene2 from '../assets/EM_scene2.png';
import em_setting from '../assets/EM_setting.png';
import em_stage1 from '../assets/EM_stage1.png';
import em_stage2 from '../assets/EM_stage2.png';




export const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
};

export const btnImg = [
    backBtn,
    nextBtn
]

export const logoImg = [
    csslogo,
    htmllogo,
    jsplogo,
    xdlogo,
    photoshoplogo,
    csharplogo,
    pythonlogo,
    javalogo,
    githublogo,
    eclipselogo,
    vslogo,
    vscodelogo,
    unitylogo,
    playstorelogo,
    
];

export const bgImg = [
    backgroundImg,
    codingImg,
    SkillsBgImg
];

export const styleImg = [
    profileCartoonImg,
    bubble1,
    bubble2,
    bubble3,
    bubble4
]

export const images = [
    lukiki,
    profileImg,
    image1,
    image2
];

export const cp_screenshots = [
    cp_stage1,
    cp_stage2,
    cp_quiz,
    cp_hint1,
    cp_hint2,
    cp_hint3,
    cp_lang
]

export const em_screenshots = [
    em_main1,
    em_main2,
    em_stage1,
    em_stage2,
    em_setting,
    em_scene1,
    em_scene2,
    em_anim,
    em_inventory,
    em_guideline,
    em_hint
]

export const defaultTexts = {
    home: 'Home',
    projects: 'Projects',
    privacyPolicy: 'Privacy Policy',
    developer: 'Developer Oseonwoo',
    journey: 'Journey to Perfection',
    aboutMe: 'About Me',
    skills: 'Skills',
    frontend: 'Front-End',
    backend: 'Back-End',
    versionControl: 'Version Control',
    developmentTools: 'Development Tools'
};


export const project_Title = [
    "Creative Point",
    "Life Lotto",
    "Endless Mansion"
];

export const project_Info = [
    <div>
        <p>- 창의력 퀴즈 어플리케이션</p>
        <p>- Google Play Store에서 출시되었으며, 다운로드 수가 1,000회 이상 기록되었습니다.</p>
        <p>- Unity Engine과 Visual Studio, C#을 활용하여 개발되었습니다.</p>
    </div>,
    <div>
        <p>- 로또 분석 어플리케이션</p>
        <p>- Unity Engine과 Visual Studio, C#을 이용하여 개발되었습니다.</p>
    </div>,
    <div>
        <p>- 3D 기반 방탈출 어플리케이션</p>
        <p>- 대학 과정 졸업 작품으로 진행되었습니다.</p>
        <p>- Unity Engine과 Visual Studio, C#을 사용하여 제작되었으며, Eleven Labs와 같은 AI 기술을 적용하여 현실성과 몰입도를 높였습니다.</p>
        <p>- 데이터베이스 관리를 위해 Json 파일을 활용하였으며, 다양한 3D 모델링 샘플을 이용하여 애니메이션을 구현하였습니다.</p>
    </div>
];

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

export const useAnimateOnScroll = (titleRef) => {
    const scrollposition = useScrollPosition();

    useEffect(() => {
        const element = titleRef.current;
        if (!element) return;

        const offsetTop = element.offsetTop;

        if(scrollposition >= offsetTop) {
            element.classList.add('animate__animated', 'animate__fadeInLeft');
        } else {
            element.classList.remove('animate__animated', 'animate__fadeInLeft');
        }
    });
};

export const useAnimateWidthOnScroll = (divRef) => {
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        const element = divRef.current;

        if (!element) return;

        const handleScroll = () => {
            const offsetTop = element.offsetTop - 400;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
                element.style.width = '100%';
                element.style.left = "0";
            } else {
                element.style.width = '80%';
                element.style.left = "10%";
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition, divRef]);
};

export const useSetNavBg = (navRef, imgRef) => {
    const scrollposition = useScrollPosition();

    useEffect(() => {
        const imgR = imgRef.current;
        const nav = navRef.current;

        if (!imgR || !nav) return;

        const offsetBottom = imgR.offsetTop + imgR.offsetHeight;

        if(scrollposition >= offsetBottom) {
            nav.style.backgroundColor = 'black';
            nav.style.border = '3px solid white';
        } else {
            nav.style.backgroundColor = '';
            nav.style.border = '0';
        }
    }, [scrollposition, navRef, imgRef]);
};

export const useTypeAnim = (aboutMeRef) => {
    const [startTyping, setStartTyping] = useState(false);
    const scrollposition = useScrollPosition();

    useEffect(() => {
        const am = aboutMeRef.current;

        if(!am) return;

        const offsetTop = am.offsetTop - am.offsetHeight / 2;

        if(scrollposition >= offsetTop) {
            setStartTyping(true);
        } else {
            setStartTyping(false);
        }
    }, [scrollposition, aboutMeRef]);

    return startTyping;
};

export const useNavBtnClick = (navBtnRef, btnListRef) => {
    useEffect(() => {
        const navB = navBtnRef.current;
        const btnList = btnListRef.current;

        if (!navB || !btnList) {
            return;
        }

        const toggleBtnList = () => {
            if (navB.style.visibility === 'hidden') {             
                btnList.style.visibility = 'visible';
            } else {
                if (btnList.style.visibility === 'visible') {
                    btnList.style.visibility = 'hidden';
                } else {
                    btnList.style.visibility = 'visible';
                }
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 800) {
                btnList.style.visibility = 'visible';
            } else {
                btnList.style.visibility = 'hidden';
            }
        };

        navB.addEventListener('click', toggleBtnList);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            navB.removeEventListener('click', toggleBtnList);
            btnList.style.visibility = 'visible';
        };
    }, [navBtnRef, btnListRef]);
};

export const usePPOnClick = (ppRef1, ppRef2, ppContRef) => {
    useEffect(() => {
      const ppR1 = ppRef1.current;
      const ppR2 = ppRef2.current;
      const ppCont = ppContRef.current;
  
      if (!ppR1 || !ppR2 || !ppCont) return;
  
      const handleClick = (event) => {
        if (ppCont.style.visibility === 'visible') {
          ppR1.style.fontSize = '20px';
          ppR1.style.transform = 'translate(0, 0)';
          ppR2.style.fontSize = '20px';
          ppR2.style.transform = 'translate(0, 0)';
          ppR1.style.visibility = 'visible';
          ppR2.style.visibility = 'visible';
          ppCont.style.visibility = 'hidden';
          ppCont.style.opacity = '0';
        } else {
          if (event.target === ppR1) {
            ppR2.style.visibility = 'hidden';
            ppR1.style.fontSize = '30px';
            ppR1.style.transform = 'translate(-500px, 150px)';
            
          } else if (event.target === ppR2) {
            ppR1.style.visibility = 'hidden';
            ppR2.style.fontSize = '30px';
            ppR2.style.transform = 'translate(-500px, 10px)';
            
          }
          ppCont.style.visibility = 'visible';
          ppCont.style.opacity = '1';
        }
      };
  
      ppR1.addEventListener('click', handleClick);
      ppR2.addEventListener('click', handleClick);
  
      return () => {
        ppR1.removeEventListener('click', handleClick);
        ppR2.removeEventListener('click', handleClick);
      };
    }, [ppRef1, ppRef2, ppContRef]);
};

export const useProjectInfo = () => {

    return images.map((image, index) => (
        <div key={index} className="pj_container">
            <img src={image} alt={`Project ${index + 1}`} />
            <div className="pj_text">
                <p>{project_Title[index]}</p>
            </div>
        </div>
    ));
};

export const getBrowserLang = () => {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('ko')) {
        return 'ko';
      }
    return 'en';
}; 

export const useLanguageManager = () => {
    const [texts, setTexts] = useState({ en: {}, ko: {} });
    const [language, setLanguage] = useState('en');
  
    useEffect(() => {
      fetch('/assets/data/texts.xlsx')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.arrayBuffer();
        })
        .then(data => {
          const workbook = XLSX.read(data, { type: 'array' });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
  
          const parsedTexts = jsonData.reduce((acc, row) => {
            const { Language, Key, Value } = row;
            if (!acc[Language]) acc[Language] = {};
            acc[Language][Key] = Value;
            return acc;
          }, {});
  
          setTexts(parsedTexts);
  
          const browserLanguage = getBrowserLang();
          setLanguage(browserLanguage);
        })
        .catch(error => {
          console.error('Error fetching or parsing the Excel file:', error);
        });
    }, []);
  
    return { texts, language, setLanguage };
};

export const SkillList = ({ skills }) => {
    return (
        <div className="pjSkill_div">
            {skills.map((skill, index) => (
                <div key={index} className="skillItem">
                    {skill}
                </div>
            ))}
        </div>
    );
};

export const useImageFlipOnClick = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return { flipped, handleFlip };
};

export const FlipImg = ({ image, index }) => {
    const { flipped, handleFlip } = useImageFlipOnClick();

    return (
        <div key={index} onClick={handleFlip} className={`project_container ${flipped ? 'flipped' : ''}`}>
            <img src={image} alt={`Project ${index + 1}`} />
            <div className="project_click">Click!</div>
            <div className={`project_details ${flipped ? 'visible' : ''}`}>
                <div className="details_title">Creative Point</div>
                <div className="details_info1">개발기간: 2020.05 - 2020.10</div>
            </div>
        </div>
    );
};

export const ImageSlider = ({ images, screenSize }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div>
        <div className="pj_imgBg">
          <img className={screenSize} src={images[currentIndex]} alt="cp_img" />
        </div>
        <div>
          <button className="backBtn" onClick={handlePrev}>
            <img src={btnImg[0]} alt="Back Button Img"></img>
          </button>
          <button className="nextBtn" onClick={handleNext}>
            <img src={btnImg[1]} alt="Back Button Img"></img>
          </button>
        </div>
      </div>
    );
};

