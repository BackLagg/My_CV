const skillsData = (language) => [
    {
        title: language === 'EN' ? 'Python Backend' : 'Python Бэкенд',
        details: language === 'EN'
            ? 'Proficient in Python with experience in frameworks like Django and FastAPI (including FastAPI Users). Skilled in managing background tasks using Celery and implementing real-time communication via WebSocket. Good knowledge in creating and maintaining RESTful APIs and expertise in REST architecture. Experienced in monitoring system performance and load metrics using Prometheus.'
            : 'Знания Python с опытом работы с фреймворками Django и FastAPI (включая FastAPI Users). Умение управлять фоновыми задачами с помощью Celery и реализовывать взаимодействие в реальном времени через WebSocket. Навыки создания и поддержки RESTful API и знания в REST-архитектуре. Опыт мониторинга производительности системы и метрик нагрузки с использованием Prometheus.',
    },
    {
        title: language === 'EN' ? 'Frontend Development' : 'Фронтенд разработка',
        details: language === 'EN'
            ? 'Proficient in HTML, CSS, and JavaScript. Experienced in developing with React and creating adaptive designs for various devices.'
            : 'Знание HTML, CSS и JavaScript. Опыт разработки на React и создания адаптивной вёрстки для различных устройств.',
    },
    {
        title: language === 'EN' ? 'Databases' : 'Базы данных',
        details: language === 'EN'
            ? 'Experienced in working with relational databases such as PostgreSQL, SQLite, and MySQL, as well as non-relational databases like Redis.'
            : 'Опыт работы с реляционными базами данных, такими как PostgreSQL, SQLite и MySQL, а также с нереляционными базами данных, такими как Redis.',
    },
    {
        title: language === 'EN' ? 'WordPress Development' : 'WordPress разработка',
        details: language === 'EN'
            ? 'Commercial experience in developing and deploying applications built using the WordPress editor.'
            : 'Коммерческий опыт разработки и деплоя приложений, созданных с использованием редактора WordPress.',
    },
    {
        title: language === 'EN' ? 'Docker and Kubernetes' : 'Docker and Kubernetes',
        details: language === 'EN'
            ? 'Skilled in creating Docker images and containers, configuring and managing container interactions. Proficient in container orchestration using Docker Compose and Kubernetes clusters.'
            : 'Навыки создания Docker-образов и контейнеров, настройки и взаимодействия контейнеров. Опыт оркестрации контейнеров с использованием Docker Compose и кластеров Kubernetes.',
    },
    {
        title: language === 'EN' ? 'Git and CI/CD' : 'Git и CI/CD',
        details: language === 'EN'
            ? 'Proficient in working with Git, specifically GitHub and GitLab. Experienced with GitLab CI/CD, configuring GitLab runners, and setting up deployment processes using Docker or Kubernetes.'
            : 'Навыки работы с Git, в частности с GitHub и GitLab. Знания GitLab CI/CD, работа с GitLab runners и настройка процессов деплоя с помощью Docker или Kubernetes.',
    },
    {
        title: language === 'EN' ? 'Node.js Basics' : 'Основы Node.js',
        details: language === 'EN'
            ? 'Basic skills in developing with Node.js and deploying applications. Experience in server setup and configuration using Nginx.'
            : 'Небольшие навыки разработки на Node.js, деплой приложений и настройка сервера с использованием Nginx.',
    }

];

export default skillsData;
