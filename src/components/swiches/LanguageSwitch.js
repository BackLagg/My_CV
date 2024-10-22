import React from 'react';
import '../../styles/LanguageSwitch.css'; // Подключение стилей

const LanguageSwitch = ({language, setLanguage}) => {
  const toggleLanguage = () => {
    const newLanguage = language === 'RU' ? 'EN' : 'RU';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Сохраняем язык в localStorage
};

  return (
    <div className="toggle-button-cover">
      <div className="button r" id="button-3">
        <input
          type="checkbox"
          className="checkbox"
          checked={language === 'EN'}
          onChange={toggleLanguage}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
