import 'animate.css/animate.min.css';
import React, { useRef} from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import '../index.css';
import './Home.css';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    bgImg,
    images,
    logoImg,
    project_Title,
    project_Info,
    items,
    useAnimateOnScroll,
    useSetNavBg,
    useTypeAnim,
    useNavBtnClick
} from './Utils';


const ImageSlider = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <Slider {...setting}>
            {images.map((image, index) => (
                <div key={index} className="slider-slide">
                    <img src={image} className="slider-child slider-Img" alt={`Slide ${index + 1}`} />
                    <div className="sliderInfo">
                        <p className = "slider-text">{project_Title[index]}</p>
                        <p className = "slider-p">{project_Info[index]}</p> 
                    </div>
                                                                        
                </div>
                
            ))}
        </Slider>
    )
}


function Home() 
{
    const titleRef = useRef(null);
    const navRef =useRef(null);
    const imgRef = useRef(null);
    const aboutMeRef = useRef(null);

    const navBtnRef = useRef(null);
    const btnListRef = useRef(null);
    
    

    useAnimateOnScroll(titleRef);
    useSetNavBg(navRef, imgRef);
    useNavBtnClick(navBtnRef, btnListRef);

    const startTyping = useTypeAnim(aboutMeRef);

    return (
        <div className="Main">
            <div className="headerBg">
                <img src={bgImg[0]} alt ="Background Img" className = "hdBgImg" ref={imgRef}/>
                <div className="navBar" ref={navRef}>
                    <div className="logo">
                        <img src={images[0]} alt="Logo Img" className="logoImg"/>
                    </div>
                    <div className="btnClass" ref={btnListRef}>
                        <Link to="/" className="Btn1">Home</Link>
                        <Link to="/Projects" className="Btn2">Projects</Link>
                        <Link to="/Privacy_Policy" className="Btn3">Privacy Policy</Link>
                    </div>
                    <div className="menuBtn" ref={navBtnRef}></div>  
                </div>
                     
            </div>    
            <div className="div1">
                <p className ="titleTxt animate__animated animate__fadeIn" ref={titleRef}>개발자 오선우</p>
                <p className ="subTitleTxt">"완성을 향한 여정"</p>
                <img src= {bgImg[1]} alt = "Coding Img" className="codingImg"/>
            </div>
            <div className ="div2" ref={aboutMeRef}>
                <p className ="aboutMeTxt">About Me</p>
                <ul className="liGroup">
                    {items.map((item, index) => (
                        <li className="myInfo" key={index}>
                            {startTyping ? (
                                <ReactTyped
                                    strings={[item]}
                                    typeSpeed={40}
                                    backSpeed={40}
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
                <p className ="projectsTxt">Projects</p>
                <div className="div3_1">
                    <ImageSlider></ImageSlider>
                </div>
                
            </div>
            <div className="div4">
                <p className ="skillsTxt">Skills</p>
                <div className="div4_1">
                    <div className="frontEnd">
                        <div className="skillTitle">Front-End</div>
                        <div className="skillContainer">
                            <div className="skills">
                                <img src={logoImg[0]} className="skillImg" alt="HTML LogoImg"/>
                                <p className="skillName">HTML</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[1]} className="skillImg" alt="CSS LogoImg"/>
                                <p className="skillName">CSS</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[2]} className="skillImg" alt="JavaScript LogoImg"/>
                                <p className="skillName">JSP</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[3]} className="skillImg" alt="Adobe XD LogoImg"/> 
                                <p className="skillName">Adobe XD</p> 
                            </div>
                            <div className="skills">
                                <img src={logoImg[4]} className="skillImg" alt="Adobe Photoshop LogoImg"/> 
                                <p className="skillName">Adove Photoshop</p>  
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>

                    <div className="backEnd">
                        <div className="skillTitle">Back-End</div>
                        <div className="skillContainer">
                            <div className="skills">
                                <img src={logoImg[5]} className="skillImg" alt="C# LogoImg"/>
                                <p className="skillName">C#</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[6]} className="skillImg" alt="Python LogoImg"/>
                                <p className="skillName">Python</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[7]} className="skillImg" alt="Java LogoImg"/>
                                <p className="skillName">Java</p>
                            </div>
                        </div>
                    </div>
                    <div className="versionControl">
                    <div className="skillTitle">Version Control</div>
                    <div className="skillContainer">
                            <div className="skills">
                                <img src={logoImg[8]} className="skillImg" alt="GitHub LogoImg"/>
                                <p className="skillName">GitHub</p>
                            </div>
                           
                        </div>    
                    </div>
                    <div className="developmentTools">
                        <div className="skillTitle">Development Tools</div>
                        <div className="skillContainer">
                            <div className="skills">
                                <img src={logoImg[9]} className="skillImg" alt="Eclipse LogoImg"/>
                                <p className="skillName">Eclipse</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[10]} className="skillImg" alt="Vs LogoImg"/>
                                <p className="skillName">Visual Studio</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[11]} className="skillImg" alt="Vs Code LogoImg"/>
                                <p className="skillName">Visual Studio Code</p>
                            </div>
                            <div className="skills">
                                <img src={logoImg[12]} className="skillImg" alt="Unity LogoImg"/>
                                <p className="skillName">Unity Engine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
              
    );
}

export default Home;