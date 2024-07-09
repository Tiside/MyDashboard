import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Stronka/Main.css';
import Main from './Stronka/Main';
import Nav from './Componetnts/Nav';
import Panel from './Componetnts/Panel';
import Video from './Stronka/Video';
import Work from './Stronka/Work';
import Theme from './Stronka/Theme';
import Photography from './Stronka/photography';
import Fonts from './Stronka/Fonts';

function App() {
  const [activeSection, setActiveSection] = useState('main');

  const handleSectionChange = (section) => {
    console.log(`Switching to section: ${section}`); // Лог для отладки
    setActiveSection(section);
  };


  return (
<div>
    <div className="App" id='App'>
      <div className="main">

        <Nav onSectionChange={handleSectionChange}/>
        
        <div className='container'>
          
          
          <Panel onSectionChange={handleSectionChange} />
          <Main activeSection={activeSection} />
        </div>
      </div>
      <div className='hamburger-nav'>
    <nav>
        <ul>
            <li>Main</li>
            <li>Friends</li>
            <li>Messages</li>
            <li>Notes</li>
            <li>Blog</li>
            <li>Work</li>
        </ul>
    </nav>
</div>
    </div>
</div>
  );
}




export default App;
