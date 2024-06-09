import '../index.css';
import './Privacy_Policy.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';


import {
    images, 
    usePPOnClick,
    useLanguageManager,
    defaultTexts

} from './Utils'


function PrivacyPolicy() {
    
    const navBtnRef = useRef(null);
    const btnListRef = useRef(null);
    const ppRef1 = useRef(null);
    const ppRef2 = useRef(null);
    const ppContRef = useRef(null);

    const { texts, language } = useLanguageManager();

    const displayTexts = texts[language] || defaultTexts;


    usePPOnClick(ppRef1, ppRef2, ppContRef); 

    return (
        <div className="Main">
            <div className="pp_headerBg">
                <div className="pp_gradientOverlay"></div>
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
                <div className="p_title">Privacy Policy</div>
            </div>
            <div className="p_div1">
                <div className="pp_list1" ref={ppRef1} style={{ fontSize: '20px', transition: 'font-size 0.5s, transform 0.5s, visibility 0.5s' }}>
                    Creative Point 개인정보 처리방침
                </div>
                <div className="pp_list2" ref={ppRef2} style={{ fontSize: '20px', transition: 'font-size 0.5s, transform 0.5s, visibility 0.5s' }}>
                    Life Lotto 개인정보 처리방침
                </div>
                <div className="pp_content" ref={ppContRef} style={{ visibility: 'hidden', opacity: 0, transition: 'visibility 0s 0.1s, opacity 0.1s' }}>
                    This is the content of the privacy policy.
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;