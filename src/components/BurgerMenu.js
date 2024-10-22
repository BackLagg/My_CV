import React from 'react';

const BurgerMenu = ({ isOpen, onToggle }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={onToggle}>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </div>
  );
};

export default BurgerMenu;
