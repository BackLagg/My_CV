import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'RU');
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light');
  

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
            <Header 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode} 
                language={language} 
                setLanguage={setLanguage} 
            />
            <Main 
                isDarkMode={isDarkMode} 
                language={language} // Передаем язык в Main
            />
            <Footer />
        </div>
  );
}

export default App;
