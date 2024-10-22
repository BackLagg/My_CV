import React from 'react';
import '../styles/Main.css'; // Подключаем стили

const Education = ({ language }) => {
  return (
    <section className="education-section">
      <h2 className="education-title">{language === 'EN' ? 'Education' : 'Образование'}</h2>
      
      {/* Карточка учебного заведения */}
      <div className="education-card">
        <h3 className="institution-name">University of Example</h3>
        <p><strong>{language === 'EN' ? 'Faculty: ' : 'Факультет: '}</strong>Computer Science</p>
        <p><strong>{language === 'EN' ? 'Specialty: ' : 'Специальность: '}</strong>Software Engineering</p>
      </div>

      {/* Курсы */}
      <div className="courses">
        <h3>{language === 'EN' ? 'Courses' : 'Курсы'}</h3>
        <ul>
          <li>{language === 'EN' ? 'Course 1: Web Development' : 'Курс 1: Веб-разработка'}</li>
          <li>{language === 'EN' ? 'Course 2: Data Science' : 'Курс 2: Наука о данных'}</li>
          <li>{language === 'EN' ? 'Course 3: Machine Learning' : 'Курс 3: Машинное обучение'}</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
