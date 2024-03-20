import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profileImg from './images/profile.png';

function MainSc() 
{
    return (
        <div className="headerBg">
            <h2 className="titleTxt">
                Developer Seonwoo Oh
            </h2>
            <img src={profileImg} alt="Profile" className="my-img">
            </img>
        </div>        
    );
}

ReactDOM.render(<MainSc />, document.getElementById('root'));