import React from 'react';
import '../Responsivity/Main.css';
import '../Css/Font.css';
const Fonts = () => {

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
                    <h3>Font</h3>                 
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
                    <div className="Fonts-content">
                        <h4>Works in your plan</h4>
                    <div className="your-fonts">
                        <div className="font">
                            <h4>Roboto</h4>
                            <p>
                            Whereas disregard and contempt for human rights have resulted
                            </p>
                            <hr/>
                            <div className="about-font">
                                <button>Change</button>
                            </div>
                        </div>
                        <div className="font">
                            <h4>Playwrite España</h4>
                            <p>
                            Whereas disregard and contempt for human rights have resulted
                            </p>
                            <hr/>
                            <div className="about-font">
                                <button>Change</button>
                            </div>
                        </div>
                        <div className="font">
                            <h4>Quicksand</h4>
                            <p>
                            Whereas disregard and contempt for human rights have resulted
                            </p>
                            <hr/>
                            <div className="about-font">
                                <button>Change</button>
                            </div>
                        </div>
                        <div className="font">
                            <h4>Montserrat</h4>
                            <p>
                            Whereas disregard and contempt for human rights have resulted
                            </p>
                            <hr/>
                            <div className="about-font">
                                <button>Change</button>
                            </div>
                        </div>


                    </div>
                </div>
        </div>
</div>
</>
  )
};

export default Fonts;