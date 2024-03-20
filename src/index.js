import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileImg from './assets/profile.png';

function MainSc() 
{
    return (
        <div className="Main">
            <div className="headerBg">
            <h2 className="titleTxt">
                Developer Seonwoo Oh
            </h2>
            <img src={profileImg} alt="Profile" className="my-img"/>
            </div>    
            <div className="email">Email: ekzmwor@gmail.com</div>
            <div className="contactInfo">
                <button className="github">GitHub: https://github.com/Lukasoh</button>
            </div>
            <div className="aboutMe">
                <p>About Me</p>    
            </div>            
        </div>
              
    );
}

ReactDOM.render(<MainSc />, document.getElementById('root'));