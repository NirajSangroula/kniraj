import React from "react";
import NavigatorComponent from "../components/NavigatorComponent";
import PoleComponent from "../components/PoleComponent";
import ProjectComponent from "../components/ProjectComponent";
import TextComponent from "../components/TextComponent";
import styles from './Home.module.css'
import { Education, Work } from "../components/Experience";

const workExperience = [
    {
        title: "Java Developer",
        company: "Insyght AI",
        location: "Oakville, Canada",
        duration: "Aug 2024 - Present",
        responsibilities: [
          "Designed and developed scalable, cloud-native microservices using Spring Boot 3.x, Spring Cloud Gateway, and Config Server, enabling centralized configuration and secure API routing.",
          "Built secure and stateless APIs with JWT-based authentication using Spring Security, supporting fine-grained access control and token renewal strategies.",
          "Integrated Apache Kafka for asynchronous communication between services, including implementation of producer/consumer logic with custom serializers and retry mechanisms.",
          "Developed React.js components integrated with backend services via Axios, enabling responsive UIs with real-time analytics and AI model outputs.",
          "Utilized PostgreSQL and MongoDB as hybrid data stores, performing dynamic queries via Spring Data JPA and aggregation pipelines.",
          "Employed Redis for distributed caching and session management, improving performance and reducing database load.",
          "Managed containerized deployments using Docker and Kubernetes, with Helm for configuration and secrets management across environments.",
          "Automated end-to-end CI/CD pipelines using Jenkins, Maven, and GitHub Actions for build, test, and deployment workflows.",
          "Applied Resilience4j for service resilience, implementing circuit breakers, rate limiting, and fallback procedures in critical paths.",
          "Implemented centralized logging and monitoring via Prometheus, Grafana, and Elasticsearch, improving incident response times and system observability.",
          "Wrote unit and integration tests using JUnit 5, Mockito, and Test containers, achieving high test coverage and environment-independent test execution."
    ]},
    {
        title: "Full Stack Web Developer",
        company: "Crystal Software",
        location: "Birtamode, Nepal",
        duration: "MAR 2019 - APR 2022",
        responsibilities: [
            "Designed and developed end-to-end enterprise-grade applications using the Spring Framework, leveraging MVC architecture to ensure separation of concerns and maintainable codebase.",
          "Built complete web tier layers using Spring MVC, handling routing, view resolution, and controller logic efficiently.",
          "Integrated various microservices through Spring Integration, using XML and Java-based configuration for building complex message workflows involving service activators, routers, and transformers.",
          "Utilized Spring Boot to rapidly develop RESTful web services, enabling efficient creation and retrieval of incident data, alerts, and user-driven event modules.",
          "Applied Spring Core features such as Dependency Injection, Inversion of Control (IoC), and Aspect-Oriented Programming (AOP) to simplify code modularity and manage cross-cutting concerns.",
          "Developed reusable components and implemented Spring Data JPA to interact with relational databases using repositories and custom JPQL queries.",
          "Employed Apache Kafka to implement event-driven architecture, using messaging queues for message translation, splitting, routing, aggregation, and real-time communication across microservices.",
          "Built robust persistence layer using Hibernate ORM, including entity mappings, lazy loading strategies, and caching configurations for optimized database performance.",
          "Designed and implemented dynamic UI components using HTML5, CSS3, AJAX, and React, integrating with Spring Boot APIs for seamless interaction.",
          "Built React components and integrated them with Spring Boot backends to enhance the responsiveness and interactivity of the web applications.",
          "Extensively used JavaScript, jQuery, and AngularJS for front-end validation, event handling, and rendering dynamic content with AJAX-based partial page refresh.",
          "Optimized SQL queries for performance and scalability, using indexing, query tuning, and caching techniques.",
          "Developed and configured Log4j for logging across different layers of the application, ensuring effective monitoring and issue tracking.",
          "Created reusable components and service layers while following microservice principles using Spring Boot, Eureka, and Spring Cloud Gateway.",
          "Integrated and maintained CI/CD pipelines using Jenkins, automating builds, test execution, Docker containerization, and Kubernetes deployments.",
          "Utilized Swagger/OpenAPI for REST API documentation and Postman collections for API testing, validation, and automation.",
          "Participated in Agile Scrum methodology with regular sprint planning, daily standups, sprint reviews, and retrospectives, ensuring iterative development and timely deliveries."
        ]
    }
];
const education = [
    {
        institution: "Algoma University",
        degree: "Bachelor of Computer Science",
        location: "Brampton, ON, Canada",
        completionDate: "December 2024",
        details: "Graduated with distinction in Computer Science, with a focus on Java, Spring Boot, data structures, and full-stack development."
    },
    {
        institution: "Bir Amarsingh Secondary School",
        degree: "Computer Engineering Pre-diploma",
        location: "Birtamode, Nepal",
        completionDate: "December 2020",
        details: "Completed a Computer Engineering pre-diploma with a 1-year OJT at Crystal Software, leading to a full-time developer role."
    }
];


const Home = () => {
    const [showProjectRange, setShowProjectRange] = React.useState([0, 3]);
    return (
        <>
            <div style={{ marginTop: '3rem' }}>
                <TextComponent colorIndex={0}>
                    Experienced Java developer specializing in cloud-native microservices, full-stack development with Spring Boot and React, and scalable event-driven architectures.
                </TextComponent>
            </div>
            <div className={styles.myselfWrapper}>
                <aside>
                    <img src="profile.jpg" />
                </aside>
                <section>
                    <TextComponent colorIndex={1} styles={{ fontSize: '20px', minHeight: '200px', padding: '0px 2rem' }}>
                    I am a passionate software engineer with 5+ years of experience building robust, secure, and scalable applications using Java, Spring Boot, and modern frontend frameworks like React.js. Skilled in microservices architecture, Kafka messaging, container orchestration with Docker and Kubernetes, and implementing resilient, fault-tolerant systems. With a strong foundation in data structures, algorithms, and clean code principles, I combine technical expertise with hands-on mentoring and collaborative development practices. I thrive on solving complex problems and delivering end-to-end solutions that drive business value and innovation.
                    </TextComponent>
                </section>
            </div>
            <div className={styles.simpleHeader}>Skills</div>
            <hr />
            <div className={styles.skillsWrapper}>
                <PoleComponent>
                    <div>Programming Languages</div>
                    <div>Java, C, C++, C#, PHP, JavaScript, React, jQuery, Shell Programming.</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Database Management</div>
                    <div>MySQL, PostgreSQL, Microsoft SQL Server, NoSQL (MongoDB, Redis)</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Cloud Technologies</div>
                    <div>AWS (EC2, S3, RDS, VPC, Lambda, ELB, API Gateway), Kubernetes, Docker</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Latest Tools</div>
                    <div>IntelliJ IDEA, NeoVim, Eclipse, Maven, Gradle, Git, GitHub, Bitbucket, Jenkins, JUnit, Mockito</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Web & Application Servers</div>
                    <div>Apache Tomcat, Netty, Nginx</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Frameworks</div>
                    <div>Spring Core, Spring MVC, Spring Boot, Spring Security, Spring Cloud, Hibernate, React.js.</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Other Tools</div>
                    <div>Swagger/OpenAPI, Postman, Redis, Elasticsearch, Kafka, Resilience4j, Eureka, API Gateway server</div>
                </PoleComponent>
            </div>
            <div className={styles.simpleHeader}>Work Experience</div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <Work workExperience={workExperience} />
            </div>
            <div className={styles.simpleHeader}>Education</div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <Education education={education} />
            </div>
            <div className={styles.simpleHeader}>Projects</div>
            <hr />

            <div id="projectsWrapper" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'space-around', flexWrap: 'wrap', padding: "5% 0%", backgroundColor: '#221A4B' }}>
                <NavigatorComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <a href="https://github.com/NirajSangroula/bikar.git" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '2rem' }} className="fa-solid fa-network-wired"></i>
                        </a>
                        <div>Bikar – Spring Boot Microservices Application</div>
                        <div>A scalable microservices-based platform built with Spring Boot to facilitate the exchange of goods and services. Supports secure delivery, flexible recurring payments, and credit-based transactions for seamless bartering and trading.</div>
                        <div>Spring Boot, Spring Cloud, Eureka, API Gateway, MongoDB, PostgreSQL</div>
                    </ProjectComponent>

                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/pm-niraj/kgeet.git" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '2rem' }} className="fa-brands fa-react" title="Frontend - React"></i>
                            </a>
                            <a href="https://github.com/pm-niraj/kgeet-back.git" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '2rem' }} className="fa-solid fa-server" title="Backend - Spring Boot"></i>
                            </a>
                        </div>
                        <div>Kgeet Music Player</div>
                        <div>An online music player app that finds music via YouTube and automatically saves it as mp3 for offline playback across any device.</div>
                        <div>React.js (Frontend), Spring Boot REST API (Backend), YouTube API, FFmpeg</div>
                    </ProjectComponent>

                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <a href="https://github.com/Uniquelimbu/Commute-Companion.git" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '2rem' }} className="fa-solid fa-bus"></i>
                        </a>
                        <div>Commute Companion</div>
                        <div>An innovative transit app designed during BramHack to improve commuting by showing real-time bus stop info, accessibility features, ratings, and a discussion panel with user feedback.</div>
                        <div>React.js, Mapbox GL JS, Firebase (Auth & Firestore), GTFS</div>
                    </ProjectComponent>

                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <a href="https://github.com/NirajSangroula/kniraj.git" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '2rem' }} className="fa-solid fa-code"></i>
                        </a>
                        <div>Personal Portfolio</div>
                        <div>A highly modular and component-driven personal portfolio built using React.js, showcasing reusable UI components and best practices in modern frontend development.</div>
                        <div>React.js, CSS Modules, Vite</div>
                    </ProjectComponent>

                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <a href="https://github.com/NirajSangroula/RubikCubeSimulator.git" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '2rem' }} className="fa-solid fa-cube"></i>
                        </a>
                        <div>Rubik’s Cube</div>
                        <div>Rubik’s Cube simulation and solver with a full object-oriented design. Implements SOLID principles to model and solve the cube using exhaustive search algorithms.</div>
                        <div>Java, Swing, OOP</div>
                    </ProjectComponent>

                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <a href="https://github.com/NirajSangroula/DataStructures.git" target="_blank" rel="noopener noreferrer">
                            <i style={{ fontSize: '2rem' }} className="fa-solid fa-diagram-project"></i>
                        </a>
                        <div>Data Structures Consolidation</div>
                        <div>Advanced library of data structures and algorithms including traversal, searching, and sorting, with JUnit tests and developer-friendly documentation.</div>
                        <div>Java, JUnit, Git, Eclipse</div>
                    </ProjectComponent>
                </NavigatorComponent>
            </div>

            <div className={styles.simpleHeader}>Resources and Feedback</div>
            <hr />

            <div className={styles.flexContainer} style={{ display: 'flex', flexDirection: 'column-reverse', gap: '20px', padding: '20px' }}>
                <div className={styles.removePadding} style={{ flex: 1, backgroundColor: '#221A4B', padding: '0 30%'}}>
                    <form style={{ color: 'white', padding: '20px', borderRadius: '8px' }}>
                        <h2>Feedback</h2>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                            <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                            <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                            <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}></textarea>
                        </div>
                        <button type="submit" style={{ backgroundColor: 'white', color: '#221A4B', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
                <div style={{ backgroundColor: '#F0F0F0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '12px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={styles.removeMaxWidth} style={{ color: 'black', height: '90%', width: '100%', maxWidth: '40%' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#221A4B' }}>Links</h2>
                        <ul className={styles.links} style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px' }}>
                              <a
                                href="https://bit.ly/niraresu"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '10px',
                                  borderRadius: '8px',
                                  transition: 'background-color 0.3s',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#E0E0E0')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                              >
                                Resume
                              </a>
                            </li>

                            <li style={{ marginBottom: '15px' }}>
                              <a
                                href="https://nirajs.notion.site"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '10px',
                                  borderRadius: '8px',
                                  transition: 'background-color 0.3s',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#E0E0E0')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                              >
                                Notion
                              </a>
                            </li>

                            <li style={{ marginBottom: '15px' }}>
                              <a
                                href="https://github.com/NirajSangroula"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '10px',
                                  borderRadius: '8px',
                                  transition: 'background-color 0.3s',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#E0E0E0')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                              >
                                GitHub
                              </a>
                            </li>

                            <li style={{ marginBottom: '15px' }}>
                              <a
                                href="https://www.linkedin.com/in/niraj-sangroula-809947238/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: 'none',
                                  fontWeight: 'bold',
                                  display: 'block',
                                  padding: '10px',
                                  borderRadius: '8px',
                                  transition: 'background-color 0.3s',
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#E0E0E0')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                              >
                                LinkedIn
                              </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
