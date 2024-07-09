import React from 'react';
import '../Responsivity/Main.css';
import '../Css/Work.css';
const Work = () => {

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
                        <i class='bx bx-menu'></i>
                    </div>
                    
                </div>
                
                <div className="main-content">
                <div className="flex-main-content">
                    <div className="work-content">
                        <h4>Works in your plan</h4>
                    <div className="your-works">
                        <div className="work">
                            <h4>Work Name</h4>
                            <p>
                                cool website for traininig and better expirience in web creator
                            </p>
                            <hr/>
                            <div className="about-work">
                                <button>Update</button>
                                <div className="works-edit">
                                    <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel1')}></i>
                                    <ul id="work-edit-panel1">
                                        <li><a href="">Edit</a></li>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="work">
                            <h4>Work Name</h4>
                            <p>
                                cool website for traininig and better expirience in web creator
                            </p>
                            <hr/>
                            <div className="about-work">
                                <button>Update</button>
                                <div className="works-edit">
                                    <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel2')}></i>
                                    <ul id="work-edit-panel2">
                                        <li><a href="">Edit</a></li>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="work">
                            <h4>Work Name</h4>
                            <p>
                                cool website for traininig and better expirience in web creator
                            </p>
                            <hr/>
                            <div className="about-work">
                                <button>Update</button>
                                <div className="works-edit">
                                    <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel3')}></i>
                                    <ul id="work-edit-panel3">
                                        <li><a href="">Edit</a></li>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="work">
                            <h4>Work Name</h4>
                            <p>
                                cool website for traininig and better expirience in web creator
                            </p>
                            <hr/>
                            <div className="about-work">
                                <button>Update</button>
                                <div className="works-edit">
                                    <i className='bx bx-dots-horizontal-rounded' onClick={() => DisplayWorkPanel('work-edit-panel4')}></i>
                                    <ul id="work-edit-panel4">
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

export default Work;