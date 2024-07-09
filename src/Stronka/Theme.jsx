import React from 'react';
import '../Responsivity/Main.css';
import '../Css/Theme.css';
const Theme = () => {

function DisplayWorkPanel(workPanelId){
  var workPanel = document.getElementById(workPanelId);
  if(workPanel.classList.contains('show')){
      workPanel.classList.remove('show');
  }else{
      workPanel.classList.add('show');
  }

};
  return(
<>
    <div className="content-nav">
                    <h3>Theme</h3>                 
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
                        <i class='bx bx-menu'></i>
                    </div>
                    
                </div>
                
                <div className="main-content">
                <div className="flex-main-content">
                    
                <div class="themes-container">
                            <h4>Actual themes</h4>
                            <div class="theme-light-gradient">
                                <div class='theme'>
                                    <div class="theme-image">
                                        <img src="IMG/Снимок экрана 2024-06-20 113713.png" alt="" />
                                    </div>
                                </div>
                                <div class="theme-text">
                                    <h3>Light gradient</h3>
                                    <p>Theme light/gray main with gradient on background</p>
                                    <button>Try</button>
                                </div>
                            </div>
                            <div class="theme-dark-cosmic">
                                <div class='theme'>
                                    <div class="theme-image">
                                        <img src="IMG/Снимок экрана 2024-06-20 113713.png" alt="" />
                                    </div>
                                </div>
                                <div class="theme-text">
                                    <h3>Dark Cosmic</h3>
                                    <p>Theme dark/white/gray main with dark cosmis on background</p>
                                    <button>Try</button>
                                </div>
                            </div>
                            
                        </div>
        </div>
</div>
</>
  )
};

export default Theme;