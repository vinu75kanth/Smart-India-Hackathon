import React, { useEffect, useState } from 'react'
import './Navbar.css'
import user_icon from '../../assets/user-icon-svgrepo-com (1).svg';
import cube_icon from '../../assets/cube-svgrepo-com.svg';
import settings_icon from '../../assets/settings-2-svgrepo-com.svg';
import logout_icon from '../../assets/log-out-1-svgrepo-com.svg';

function Navbar() {
    const [drop,setDrop] = useState(false);
    useEffect(()=>{
            if(drop)
                document.querySelector(".dropdown-content").classList.add('display');
            else{
                 document.querySelector(".dropdown-content").classList.remove('display');
            }
    },[drop]);
    function handleSetDrop(){
        if(!drop){
            setDrop(true);
        }
    }
    const [openTab,setOpenTab] = useState("jobs");
    useEffect(()=>{
        console.log(openTab);
        if(openTab != ""){
            document.querySelectorAll(".navbar-item").forEach(e => {
                e.classList.remove("highlight");
            });
            document.getElementById(openTab).classList.add("highlight");
        }
    },[openTab]);
    function handleOpen(m){
        setOpenTab(m);
    }
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <a href="/JobsPage" className="navbar-item" id="jobs" onClick={e => handleOpen("jobs")}>Jobs</a>
            <a href="#" className="navbar-item" id="interview" onClick={e => handleOpen("interview")}>Interview Prep</a>
            <a href="#" className="navbar-item" id="message" onClick={e => handleOpen("message")}>Message</a>
            <a href="#" className="navbar-item" id="community" onClick={e => handleOpen("community")}>Community</a>
            <a href="#" className="navbar-item" id="buildResume" onClick={e => handleOpen("buildResume")}>Build Resume</a>
        </div>
        <div className="navbar-right" onMouseOver={handleSetDrop}>
            <div className="profile-dropdown" id="vinu">
                <img src={user_icon} alt="Logo" className="profile-logo"/>
                <div className="dropdown-content">
                    <div className = "Profdrop">
                        <img src={user_icon} className= "profa" alt="logo"/>
                        <a href="#">Profile</a>
                    </div>
                    
                    <div className = "Profdrop">
                        <img src={cube_icon} className = "profa" alt="logo"/>
                        <a href="#">My Jobs</a>
                    </div>
                    <div className = "Profdrop">
                        <img src={settings_icon} className = "profa" alt="logo"/>
                        <a href="#">Settings</a>
                    </div>
                    <div className = "Profdrop">
                        <img src={logout_icon} className = "profa" alt="logo"/>
                        <a href="#">Logout</a>
                    </div> 
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar