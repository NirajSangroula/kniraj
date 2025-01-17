import React from "react";
import NavigatorComponent from "../components/NavigatorComponent";
import PoleComponent from "../components/PoleComponent";
import ProjectComponent from "../components/ProjectComponent";
import TextComponent from "../components/TextComponent";
import styles from './Home.module.css'
import { Education, Work } from "../components/Experience";

const data = [
    {
        title: "Programming Languages",
        content: "C, C++, Java, PHP, Python, JavaScript, C#"
    },
    {
        title: "Frameworks & Libraries",
        content: "Laravel, Symfony (Zend), React.js, ASP.net, Unity 3d & VR, Three.js"
    },
    {
        title: "Databases & Code Practices",
        content: "MySQL, SQLite, Oracle, Agile, Scrum, Rest, GraphQL"
    }
];
const workExperience = [
    {
        title: "Teaching Assistant",
        company: "Algoma University",
        location: "Brampton, Canada",
        duration: "2024 to Present",
        responsibilities: [
            "Assisted over 50 students per semester in understanding data structures and algorithms.",
            "Developed and led weekly lab sessions for Java and Python.",
            "Collaborated with professors to design course materials."
        ]
    },
    {
        title: "Teaching Assistant",
        company: "Bir Amarsingh Secondary School",
        location: "Birtamode, Nepal",
        duration: "2021 to 2022",
        responsibilities: [
            "Guided students in mastering computer engineering concepts.",
            "Organized and conducted programming workshops on C++ and Java."
        ]
    },
    {
        title: "Junior Developer",
        company: "Crystal Software",
        location: "Birtamode, Nepal",
        duration: "2019 to 2021",
        responsibilities: [
            "Designed and implemented key features in the Smartpalika project.",
            "Enhanced MySQL database queries, reducing data retrieval time by 30%."
        ]
    }
];
const education = [
    {
        institution: "Algoma University",
        degree: "Bachelor of Computer Science",
        location: "Brampton, ON, Canada",
        completionDate: "12/2024",
        details: "Awarded the Chancellor's Entrance Scholarship for academic excellence (A+). Current GPA: 90%."
    },
    {
        institution: "Bir Amarsingh Secondary School",
        degree: "Secondary Technical Education",
        location: "Birtamode, Nepal",
        completionDate: "2021",
        details: "Completed an OJT as part of the computer engineering course curriculum. GPA: 3.6."
    }
];

console.log(data);

const Home = () => {
    const [showProjectRange, setShowProjectRange] = React.useState([0, 3]);
    return (
        <>
            <div style={{ marginTop: '3rem' }}>
                <TextComponent colorIndex={0}>
                    A passionate and self-learning individual in the journey of computer science.
                </TextComponent>
            </div>
            <div className={styles.myselfWrapper}>
                <aside>
                    <img src="profile.jpg" />
                </aside>
                <section>
                    <TextComponent colorIndex={1} styles={{ fontSize: '20px', minHeight: '200px', padding: '0px 2rem' }}>
                        Recent bachelor’s graduate, adept at quickly comprehending diverse programming languages and frameworks with a strong dedication to clean code practices and algorithm efficiency. Enthusiastic about contributing innovative solutions in a collaborative team environment and furthering technical proficiency through hands-on experience.
                    </TextComponent>
                </section>
            </div>
            <div className={styles.simpleHeader}>Skills</div>
            <hr />
            <div className={styles.skillsWrapper}>
                <PoleComponent>
                    <div>Programming Languages</div>
                    <div>C, C++, Java, PHP, Python, JavaScript, C#</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Frameworks & Libraries</div>
                    <div>Laravel, Symfony (Zend), React.js, ASP.net, Unity 3d & VR, Three.js</div>
                </PoleComponent>
                <PoleComponent>
                    <div>Databases & Code Practices</div>
                    <div>MySQL, SQLite, Oracle, Agile, Scrum, Rest, GraphQL</div>
                </PoleComponent>
            </div>
            <div className={styles.simpleHeader}>Projects</div>
            <hr />
            <div id="projectsWrapper" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'space-around', flexWrap: 'wrap', padding: "5% 0%", backgroundColor: '#221A4B' }}>
                <NavigatorComponent data={data}>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>'s cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                    <ProjectComponent styles={{ flexBasis: '40%' }}>
                        <i style={{ fontSize: '2rem' }} className="fa-solid fa-laptop-code"></i>
                        <div>Rubik's cube solver</div>
                        <div>A console based app to solve Rubik’s cube using exhaustive search algorithm. The major feature here is object oriented representation of Rubik’s cube system.</div>
                        <div>Java, Eclipse, Git</div>
                    </ProjectComponent>
                </NavigatorComponent>
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

            <div className={styles.simpleHeader}>Feedback and other links</div>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px' }}>
                <div style={{ flex: 1 }}>
                    <form style={{ backgroundColor: '#221A4B', color: 'white', padding: '20px', borderRadius: '8px' }}>
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
                <div style={{ backgroundColor: '#F0F0F0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '12px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'stretch' }}>
                    <div style={{ color: 'black', height: '90%', width: '100%', maxWidth: '400px' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#221A4B' }}>Links</h2>
                        <ul className={styles.links} style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px' }}><a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '10px', borderRadius: '8px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Resume</a></li>
                            <li style={{ marginBottom: '15px' }}><a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '10px', borderRadius: '8px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Notion</a></li>
                            <li style={{ marginBottom: '15px' }}><a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '10px', borderRadius: '8px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>GitHub</a></li>
                            <li style={{ marginBottom: '15px' }}><a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '10px', borderRadius: '8px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;