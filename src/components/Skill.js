import React from 'react';
import '../styles/Skill.css'; // Подключаем стили для навыков

const Skill = ({ title, details, isDarkMode, isExpanded, onExpand }) => {
  const handleClick = () => {
    onExpand();
  };

  return (
    <div
      className={`skill-container ${isExpanded ? 'expanded' : ''} ${isDarkMode ? 'dark-skills' : 'light-skills'}`}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p className="ellipsis">...</p>
      <div className={`skill-details ${isExpanded ? 'open' : ''}`}>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Skill;
