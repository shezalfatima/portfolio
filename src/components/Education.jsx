import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Skills.css'; // Reusing Skills styles
import 'animate.css';

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.education-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educationList = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Lovely Professional University",
      year: "2023 - Present",
      description: "Focused on Software Engineering and Data Science, developing strong skills in programming, algorithms, and data analysis."
    },
    {
      degree: "Higher Secondary School",
      institution: "Jingle Bells Public School",
      year: "2021 - 2023",
      description: "Completed my higher secondary education with a strong focus on science and mathematics."
    }
  ];

  return (
    <section className={`skills-section education-section ${isVisible ? 'animate-in' : ''}`} id="education">
      <Container>
        <Row>
          <Col size={12}>
            <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
                <h2 className="skills-title">Education</h2>
              </div>
              <div className={`skills-content ${isVisible ? 'animate-in' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                {educationList.map((edu, index) => (
                  <div key={index} className="skill-description-container" style={{ width: '100%', maxWidth: '800px', minHeight: 'auto', padding: '30px' }}>
                    <h3 className="skill-description-title" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{edu.degree}</h3>
                    <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', marginBottom: '10px' }}>{edu.institution}</h4>
                    <span style={{ display: 'inline-block', background: 'rgba(139, 92, 246, 0.2)', padding: '5px 12px', borderRadius: '15px', color: '#8b5cf6', fontSize: '0.9rem', marginBottom: '15px' }}>
                      {edu.year}
                    </span>
                    <p className="skill-description-text">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
