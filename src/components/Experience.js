import React from 'react';

const Work = ({ workExperience }) => (
    <section style={{ flexBasis: '80%' }}>
        {workExperience.map((job, index) => (
            <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid black', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{job.title}</h3>
                    <p style={{ margin: 0 }}><strong>{job.duration}</strong></p>
                </div>
                <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#555' }}>{job.company}, {job.location}</p>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);

const Education = ({ education }) => (
    <section>
        {education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid black', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{edu.degree}</h3>
                    <p style={{ margin: 0 }}><strong>{edu.completionDate}</strong></p>
                </div>
                <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#555' }}>{edu.institution}, {edu.location}</p>
                <p style={{ margin: '5px 0', color: 'black' }}>{edu.details}</p>
            </div>
        ))}
    </section>
);

export { Work, Education };
