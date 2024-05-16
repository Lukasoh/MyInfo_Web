import '../index.css';
import './Privacy_Policy.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';


import {images, useSetNavBg} from './Utils'


function PrivacyPolicy() {
    const navRef = useRef(null);
    const imgRef = useRef(null);
    const navBtnRef = useRef(null);
    const btnListRef = useRef(null);
    
    useSetNavBg(navRef, imgRef);

    return (
        <div className="Main">
            <div className="headerBg" ref={imgRef}>
                <div className="navBar" ref={navRef}>
                    <div className="logo">
                        <img src={images[0]} alt="Logo Img" className="logoImg"/>
                    </div>
                    <div className="btnClass" ref={btnListRef}>
                        <Link to="/" className="Btn1">Home</Link>
                        <Link to="/Projects" className="Btn2">Projects</Link>
                        <Link to="/privacy-policy" className="Btn3">Privacy Policy</Link>
                    </div>
                    <div className="menuBtn" ref={navBtnRef}></div>  
                </div>
                <div className="p_title">Privacy Policy</div>
                <div className="headerDeco">
                    <div className="deco_child">
                        <div className="roundDeco"><img className="projectImg" src={images[0]} alt="Creative Point Img"></img></div>
                    </div>
                    <div className="deco_child2">
                        <div className="roundDeco"><img className="projectImg" src={images[1]} alt="Life Lotto Img"></img></div>
                    </div>
                    <div className="deco_child3">
                        <div className="roundDeco"><img className="projectImg" src={images[2]} alt="Endless Mansion Img"></img></div>
                    </div>
                </div>
                     
            </div>
            <div className="p_div1">
                Hi
            </div>
        </div>
    );
}

export default PrivacyPolicy;