import React, { useState } from 'react';
import '../styles/Main.css'; // Подключаем стили
import "../styles/EdCard.css";
import profilePic from '../assets/profile-pic.png';
import Skill from './Skill.js'
import skillsData from './skillsData';
import '../styles/AboutMe.css';
import '../styles/Projects.css';

const Main = ({ language, isDarkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Для отслеживания раскрытого навыка

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Скрыть, если кликнуть повторно
  };
  return (
    <div className={`${isDarkMode ? 'dark-main-container ' : 'light-main-container '}`}>
      <section className={`${isDarkMode ? 'dark-section' : 'light-section'} personal-info`}>
        <h2 className="about-me-title">{language === 'EN' ? 'Profile' : 'Профиль'}</h2>

        <div className="name-address-container">
          <div className="name-block">
            <p><strong>{language === 'EN' ? 'First Name: ' : 'Имя: '}</strong>John</p>
            <p><strong>{language === 'EN' ? 'Last Name: ' : 'Фамилия: '}</strong>Doe</p>
            <p><strong>{language === 'EN' ? 'Middle Name: ' : 'Отчество: '}</strong>Smith</p>
            <p><strong>{language === 'EN' ? 'Address: ' : 'Адрес: '}</strong>123 Main St, City, Country</p>
          </div>

          <div className="profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
        <div className="name-address-container">
          <div className="contact-info-block">
            <h3>{language === 'EN' ? 'Contact Information' : 'Контактная Информация'}</h3>
            <p><strong>{language === 'EN' ? 'Phone: ' : 'Телефон: '}</strong>+123 456 7890</p>
            <p><strong>{language === 'EN' ? 'Telegram: ' : 'Телеграм: '}</strong>@johndoe</p>
            <p><strong>{language === 'EN' ? 'Email: ' : 'Почта: '}</strong>johndoe@example.com</p>
          </div>
        </div>
      </section>
      <section className={` ${isDarkMode ? 'dark-section' : 'light-section'}`}>
        <h2 className={"education-title"}>{language === 'EN' ? 'Education' : 'Образование'}</h2>

        {/* Карточка учебного заведения */}
        <div className={`${isDarkMode ? 'dark-card' : 'light-card'}`}>
          <h3 className="institution-name">University of Example</h3>
          <p><strong>{language === 'EN' ? 'Faculty: ' : 'Факультет: '}</strong>Computer Science</p>
          <p><strong>{language === 'EN' ? 'Specialty: ' : 'Специальность: '}</strong>Software Engineering</p>
        </div>

        {/* Курсы */}
        <div className={`${isDarkMode ? 'dark-card' : 'light-card'}`}>
          <h3>{language === 'EN' ? 'Courses' : 'Курсы'}</h3>
          <ul>
            <li>{language === 'EN' ? 'Course 1: Web Development' : 'Курс 1: Веб-разработка'}</li>
            <li>{language === 'EN' ? 'Course 2: Data Science' : 'Курс 2: Наука о данных'}</li>
            <li>{language === 'EN' ? 'Course 3: Machine Learning' : 'Курс 3: Машинное обучение'}</li>
          </ul>
        </div>
      </section>
      <section className={`${isDarkMode ? 'dark-section' : 'light-section'}`}>
        <h2 className="education-title">{language === 'EN' ? 'Skills' : 'Навыки'}</h2>
        <section className="skills-container">
          {skillsData(language).map((skill, index) => (
            <Skill
              key={index}
              title={skill.title}
              details={skill.details}
              isDarkMode={isDarkMode}
              isExpanded={index === expandedIndex} // Проверяем, открыт ли этот навык
              onExpand={() => handleExpand(index)} // Функция для изменения состояния
            />
          ))}
        </section>
      </section>
      <section className={`about-me-container ${isDarkMode ? 'dark-section' : 'light-section'}`}>
        {/* Заголовок раздела */}
        <h2>{language === 'EN' ? 'About Me' : 'Обо Мне'}</h2>

        {/* Качества */}
        <div className="qualities">
          <h3>{language === 'EN' ? 'Qualities' : 'Качества'}</h3>
          <ul>
            <li>{language === 'EN' ? 'Responsibility' : 'Ответственность'}</li>
            <li>{language === 'EN' ? 'Attention' : 'Внимание'}</li>
            <li>{language === 'EN' ? 'Passion' : 'Увлеченность'}</li>
            <li>{language === 'EN' ? 'Eagerness to Learn' : 'Стремление постигать'}</li>
            <li>{language === 'EN' ? 'Calmness' : 'Спокойствие'}</li>
            <li>{language === 'EN' ? 'Control Over Situations' : 'Контроль над ситуацией'}</li>
          </ul>
        </div>

        {/* Хобби */}
        <div className="hobbies">
          <h3>{language === 'EN' ? 'Hobbies' : 'Хобби'}</h3>
          <ul>
            <li>{language === 'EN' ? 'Programming' : 'Программирование'}</li>
            <li>{language === 'EN' ? 'Gaming' : 'Игры'}</li>
            <li>{language === 'EN' ? 'Coocking' : 'Кулинария'}</li>
            <li>{language === 'EN' ? 'Watching movies and series' : 'Просмотр фильмов и сереалов'}</li>
            <li>{language === 'EN' ? 'Learning new areas' : 'Познания новых сфер'}</li>
          </ul>
        </div>

        {/* Языки */}
        <div className="languages">
          <h3>{language === 'EN' ? 'Languages' : 'Языки'}</h3>
          <ul>
            <li>{language === 'EN' ? 'Russian (Native)' : 'Русский (носитель)'}</li>
            <li>{language === 'EN' ? 'Belarusian (Native)' : 'Белорусский (носитель)'}</li>
            <li>{language === 'EN' ? 'English (Intermediate)' : 'Английский (Intermediate)'}</li>
          </ul>
        </div>

        {/* Немного о себе */}
        <div className="about-me-text">
          <h3>{language === 'EN' ? 'A little bit about me' : 'Немного о себе'}</h3>
          <p>
            {language === 'EN'
              ? 'I am interested in various areas of development, learn quickly, and pay great attention to detail and responsibility in my work. I always prefer quality and am very calm, with the ability to communicate constructively.'
              : 'Интересуюсь разными направлениями разработки, быстро обучаюсь, очень внимателен и ответственен к своему труду и обязанностям. Всегда предпочитаю качество. Очень спокоен и умею конструктивно общаться.'}
          </p>
        </div>
      </section>
      <section className={`projects ${isDarkMode ? 'dark-section' : 'light-section'}`}>
        <h2>{language === 'EN' ? 'Projects' : 'Проекты'}</h2>
        <div className="project-cards">
          <a href="https://github.com/BackLagg" className="project-card" target="_blank" rel="noopener noreferrer">
          <h3>{language === 'EN' ? 'My GitHub repository' : 'Мой GitHub репозиторий'}</h3>
          https://github.com/BackLagg</a>
          <a href="https://gitlab.com/BackLagg" className="project-card" target="_blank" rel="noopener noreferrer">
          <h3>{language === 'EN' ? 'My GitLab repository' : 'Мой GitLab репозиторий'}</h3>
          https://gitlab.com/BackLagg</a>
          <a href="https://dizain-shtor.by/" className="project-card" target="_blank" rel="noopener noreferrer">
          <h3>{language === 'EN' ? 'My project' : 'Мой проект'}</h3>
          https://dizain-shtor.by/</a>
        </div>
      </section>
    </div>
  );
};

export default Main;
