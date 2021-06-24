import React, { useState } from 'react';
import cx from 'classnames';
import TailwindCSS from '../assets/tailwind.css';

const Collapsible = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div className="collapsible-container">
      <div className="collapsible-header bg-green-700 rounded-full" onClick={handleClick}>
        Click to See More Details
        </div>
      <div className={cx("content-container", { expanded })}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;