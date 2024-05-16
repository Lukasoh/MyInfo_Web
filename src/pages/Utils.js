//React useState
import { useEffect, useState } from 'react';

//Main Page Header Images
import backgroundImg from '../assets/BackgroundImg.png';
import codingImg from '../assets/Coding.png';

//Project Images
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
    unitylogo   
];

export const bgImg = [
    backgroundImg,
    codingImg
];

export const images = [
    profileImg,
    image1,
    image2
];

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

export const items = [
    "2018년 김포외국어고등학교 영어/중국어과(영중과) 졸업",
    "2024년 Coventry University 컴퓨터공학과 졸업",
    "싱가포르 어학연수",
    "2개의 안드로이드 어플리케이션 구글 플레이스토어 출시"
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

