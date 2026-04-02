import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaBrain, FaCode } from "react-icons/fa";
import './Skills.css';
import 'animate.css';

export const Achievements = () => {
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

    const section = document.querySelector('.achievements-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const achievementsList = [
    {
      // title: "First Place at Placeholder Hackathon",
      description: "Built and deployed full-stack applications using React, Node.js, Express.js, and MongoDB, implementing authentication, role-based dashboards, and CRUD operations.",
      icon: <FaLaptopCode size={24} color="white" />
    },
    {
      // title: "Published Article on Modern React Patterns"
      description: "Developed machine learning models for real-world applications like diabetes risk prediction, achieving 78% accuracy and deploying them as interactive web apps using Streamlit.",
      icon: <FaBrain size={24} color="white" />
    },
    {
      // title: "Open Source Contributor",
      description: "Solved 250+ DSA problems across LeetCode and GeeksforGeeks, strengthening algorithmic problem-solving and programming fundamentals.",
      icon: <FaCode size={24} color="white" />
    }
  ];

  return (
    <section className={`skills-section achievements-section ${isVisible ? 'animate-in' : ''}`} id="achievements">
      <Container>
        <Row>
          <Col size={12}>
            <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
                <h2 className="skills-title">Achievements</h2>
              </div>

              <div className={`skills-content ${isVisible ? 'animate-in' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                {achievementsList.map((achievement, index) => (
                  <div key={index} className="skill-description-container" style={{ width: '100%', maxWidth: '800px', minHeight: 'auto', padding: '25px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                    <div style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {achievement.icon}
                    </div>
                    <div>
                      {achievement.title && (
                        <h3 className="skill-description-title" style={{ fontSize: '1.3rem', marginBottom: '8px', background: 'none', WebkitTextFillColor: 'white' }}>{achievement.title}</h3>
                      )}
                      <p className="skill-description-text">{achievement.description}</p>
                    </div>
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
