import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import './Skills.css';
import 'animate.css';

export const Certificates = () => {
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

    const section = document.querySelector('.certificates-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const certificatesList = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: <span>Learned core algorithms, data structures, and problem-solving techniques.</span>,
      url: "https://drive.google.com/file/d/1Ew5n8G_598-pJ4Ba7pVE8zBqbRrmTiK5/view"
    },
    {
      title: "Software Development Processes and Methodologies ",
      issuer: "Coursera",
      date: <span>Gained practical knowledge of SDLC and development methodologies.</span>,
      url: "https://drive.google.com/file/d/1kCnEOat2wvoR0QPUTV8Rl9AqysT_QA29/view?usp=sharing"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Udemy",
      date: <span>Learned to build responsive, user-friendly websites.</span>,
      url: "https://drive.google.com/file/d/1cJjpbq-cN2N-28DK-wNs8WF9UaIkRzWg/view?usp=sharing"
    }
  ];

  return (
    <section className={`skills-section certificates-section ${isVisible ? 'animate-in' : ''}`} id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
                <h2 className="skills-title">Certificates</h2>
              </div>

              <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
                <div className="projects-container">
                  {certificatesList.map((cert, index) => (
                    <CertificateCard
                      key={index}
                      {...cert}
                    />
                  ))}
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
