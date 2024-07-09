import React from 'react'
import '../Responsivity/Nav.css';

const Nav = ({ onSectionChange }) => {

    function DisplayUserUI(){
        var username = document.getElementById('username');
        var userSettings = document.getElementById('user-settings');
        var userProfile = document.getElementById('user-profile');
        if(username.classList.contains('show') && userSettings.classList.contains('show') && userProfile.classList.contains('show') ){
            username.classList.remove('show');
            userSettings.classList.remove('show');
            userProfile.classList.remove('show');
        }else{
            username.classList.add('show');
            userSettings.classList.add('show');
            userProfile.classList.add('show');
        }
    }

    setInterval(getTime, 1000);
        function getTime(){
            const weekday = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
            
            const d = new Date();
            let day = weekday[d.getDay()];
            let hour = d.getHours();
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();
            
            document.getElementById("day").innerHTML = day + "<span>:</span>";
            document.getElementById("hour").innerHTML = hour + "<span>:</span>";
            document.getElementById("minutes").innerHTML = minutes + "<span>:</span>";
            document.getElementById("seconds").innerHTML = seconds ;
        }

        window.onload = getTime; // Call getTime when the page loads
    return(
        <div className="navigation">
            <div className="time-user">
                <div className="time">
                    <p id="day"></p>
                    <p id="hour"></p>
                    <p id="minutes"></p>
                    <p id="seconds"></p>
                    
                </div>
                <div className="info">
                    <p>DAY</p><p>HOURS</p><p>MINUTES</p><p>SECONDS</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li onClick={() => onSectionChange('main')}>Main</li>
                    <li onClick={() => onSectionChange('work')}>Work</li>
                    <li>Friends<span></span></li>
                    <li>Messages<span></span></li>
                </ul>
            </nav>
            <div className="search-container">
            <i className='bx bx-search-alt-2' ></i>
            <input type="search" name="search" id="search" className="search" placeholder="Search"/>
        </div>
        <div className="user-ui">
        <div className="notification-bell">
            <i className='bx bxs-bell'></i>
            <span>2</span>
            </div>
            <i className='bx bxs-cloud'></i>
        <div className="user" onClick={() => DisplayUserUI()}>
            <div className="user-info" >
                <i className='bx bxs-cog' id="user-settings"></i> 
                <i className='bx bxs-user-circle' id="user-profile"></i>
                <p id="username">username</p>
            </div>
        </div>
        </div>
        </div>
    );
}
export default Nav;