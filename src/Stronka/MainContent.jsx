import React from 'react';
import '../Responsivity/Main.css';


const MainContent = () => {
  function DisplayNotesPanel(panelId) {
    var panel = document.getElementById(panelId);
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
    } else {
        panel.classList.add('show');
    }
};

function DisplayWorkPanel(workPanelId){
  var workPanel = document.getElementById(workPanelId);
  if(workPanel.classList.contains('show')){
      workPanel.classList.remove('show');
  }else{
      workPanel.classList.add('show');
  }

};

function HamburgerDiv(){
    var hamburger = document.getElementById();
    if(hamburger.classList.contains('show')){
        hamburger.classList.remove('show');
        }else{
            hamburger.classList.add('show');
            }
};

function HamburgerDiv() {
    var app = document.getElementById('App');
    var hamburgerNav = document.getElementsByClassName('hamburger-nav')[0];
    if (hamburgerNav.classList.contains('show')) {
      hamburgerNav.classList.remove('show');
      app.classList.remove('show');
    } else {
      hamburgerNav.classList.add('show');
      app.classList.add('show');
    }
  };
  return(
<>
    <div className="content-nav">
                    <h3>Main</h3>                 
                        <nav>
                            <ul>
                                <li>Main</li>
                                <li>Blog</li>
                                <li>Notes</li>
                            </ul>
                        </nav>
                    <div className="sort">
                        <h4>Sort by:</h4>
                        <i className='bx bx-time-five'></i>
                    </div> 
                    <div className='hamburger'>
                        <i class='bx bx-menu'  id='hamburger' onClick={HamburgerDiv}></i>
                        
                    </div>
                </div>
                
                <div className="main-content">
    <div className="flex-main-content">
    <div className="user-profile-main">
        <div className="login-content-profile">
            <div className="user-profile-text">
                <h3>Login/Registration</h3>
                <p>
                    Start your expirience on this website for your own comfort.
                    You can add or change what do you want for your expirience.
                    You ready start?
                </p>
                <button>Start</button>
            </div>
        <div className="user-profile-image">
            <img src="/IMG/glass.png" alt="login" />
        </div>
        </div>
   </div>
        <div className="user-notes-main">
            <h4>Notes</h4>
            <div className="notes-main">
                <div className="your-notes">
                    <h4>Zakupy</h4>
                    <h4><div className="note-status"></div>Created</h4>
                    <div className="notes-panel">
                        <button>Open</button>
                        <div className="notes-manipulate">
                        <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayNotesPanel('edit-panel1')}></i>
                        <ul id="edit-panel1">
                            <li><a href="">Edit</a></li>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Delete</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                <div className="your-notes">
                    <h4>Cos zrobic</h4>
                    <h4><div className="note-status"></div>Created</h4>
                    <div className="notes-panel">
                        <button>Open</button>
                        <div className="notes-manipulate">
                        <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayNotesPanel('edit-panel2')}></i>
                        <ul id="edit-panel2">
                            <li><a href="">Edit</a></li>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Delete</a></li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
                
                <div className="your-notes">
                    <h4>Fajna notatka</h4>
                    <h4><div className="note-status"></div>Created</h4>
                    <div className="notes-panel">
                        <button>Open</button>
                        <div className="notes-manipulate">
                        <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayNotesPanel('edit-panel3')}></i>
                        <ul id="edit-panel3">
                            <li><a href="">Edit</a></li>
                            <li><a href="">Learn more</a></li>
                            <li><a href="">Delete</a></li>
                        </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="gallery-main">
            <div className="gallery-images">
                <h4>Images</h4>
                <div className="images-container">
                    <div className="your-image">
                        <div className="image-info">
                            <img src="IMG/2024-03-23_022915.png" alt="your-image"/>
                            <h4>Stasik</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>
                            <div className="image-profile-user">
                            </div>
                        </div>
                    </div>
                    <div className="your-image">
                        <div className="image-info">
                            <img src="IMG/2024-03-23_022915.png" alt="your-image"/>
                            <h4>Tiside</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>
                            <div className="image-profile-user">
                            </div>
                        </div>
                    </div>
                    <div className="your-image">
                        <div className="image-info">
                            <img src="IMG/SUPERPUPERKLASSPIDARASDAAAAAAAALEGENDA.png" alt="your-image"/>
                            <h4>Anime Adventure</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>
                            <div className="image-profile-user">
                            </div>
                        </div>
                    </div>
                    <div className="your-image">
                        <div className="image-info">
                            <img src="IMG/Снимок экрана 2024-06-12 191329.png" alt="your-image"/>
                            <h4>Friends</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>

                        </div>
                    </div>                                 
                </div>
            </div>
            <div className="gallery-videos">
                <h4>Videos</h4>
                <div className="videos-container">
                    <div className="your-video">
                        <div className="video-info">
                        <video controls>
                                <source src="VIDEO/Desktop 2024.02.14 - 22.30.05.02.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                            <h4>Video Name</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>
                        </div>
                    </div>
                    <div className="your-video">
                        <div className="video-info">
                            <video controls>
                                <source src="VIDEO/Desktop 2024.02.14 - 22.30.05.02.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                            <h4>Video Name</h4>
                            <p>
                                Super puper bro and lysy
                                cos tam jeszcze i jeszcze
                            </p>
                            <p className="date">Created 14.05.2024</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="main-work">
            <h4>Works in your plan</h4>
            <div className="work-container">
                <div className="your-work">
                    <h4>Work Name</h4>
                    <p>
                        cool website for traininig and better expirience in web creator
                    </p>
                    <hr/>
                    <div className="panel-work">
                        <button>Update</button>
                        <div className="works-manipulate">
                            <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel1')}></i>
                            <ul id="work-edit-panel1">
                                <li><a href="">Edit</a></li>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="your-work">
                    <h4>Work Name</h4>
                    <p>
                        cool website for traininig and better expirience in web creator
                    </p>
                    <hr/>
                    <div className="panel-work">
                        <button>Update</button>
                        <div className="works-manipulate">
                            <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel2')}></i>
                            <ul id="work-edit-panel2">
                                <li><a href="">Edit</a></li>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="your-work">
                    <h4>Work Name</h4>
                    <p>
                        cool website for traininig and better expirience in web creator
                    </p>
                    <hr/>
                    <div className="panel-work">
                        <button>Update</button>
                        <div className="works-manipulate">
                            <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel3')}></i>
                            <ul id="work-edit-panel3">
                                <li><a href="">Edit</a></li>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</div>



</>
  )
};

export default MainContent;