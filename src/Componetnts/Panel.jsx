import React from 'react'
import '../Responsivity/Panel.css';

const Panel = ({ onSectionChange }) => {
  return (
    <div className="panel">
    <div className="categories" id="Categories">
        <h4>Categories</h4>
        <ul>
            <li><i className='bx bxs-layout'></i><span className='text-panel'>integrations</span><span id="new-message">1</span></li>
            <li onClick={() => onSectionChange('video')}><i className='bx bxs-videos'></i><span className='text-panel'>Video</span><span id='new-message'>2</span></li>
            <li onClick={() => onSectionChange('photography')}><i className='bx bxs-camera'></i><span className='text-panel'>Photography</span></li>
            <li><i className='bx bxs-user-detail'></i><span className='text-panel'>Portfolio</span></li>
            <li><i className='bx bxs-layer-plus'></i><span className='text-panel'>Your page</span></li>
        </ul>
    </div>
    <hr />
    <div className="categories" id="Custom">
        <h4>Custom</h4>
        <ul>
            <li onClick={() => onSectionChange('fonts')}><i className='bx bx-text'></i><span className='text-panel'>Fonts</span></li>
            <li onClick={() => onSectionChange('theme')}><i className='bx bxs-color'></i><span className='text-panel'>Theme</span></li>
        </ul>
    </div>
    <hr />
    <div className="categories" id="Resourse-Links">
        <h4>Resourse Links</h4>
        <ul>
            <li><i className='bx bx-link-alt'></i><span className='text-panel'>Your link</span></li>
            <li><i className='bx bx-link-alt'></i><span className='text-panel'>Your link</span></li>
            <li><i className='bx bx-link-alt'></i><span className='text-panel'>Your link</span></li>
            <li><i className='bx bx-link-alt'></i><span className='text-panel'>Your link</span></li>
        </ul>
    </div>
</div>
  )
};
export default Panel;