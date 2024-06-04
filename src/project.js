import { useState } from 'react';
import './styles/project.css';
import img1 from './photo/image.png'; 
import img2 from './photo/bur2.png'; 
import img3 from './photo/bur.png'; 

const images = [img1, img2, img3];

const ProjectShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = [
    {
      title: "Genderless Kei -Japan’s Hot",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    },
    {
      title: "Better Strategy & Quality",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    },
    {
      title: "Genderless Kei – Japan’s Hot",
      description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
    }
  ];

  const handleContentClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="project-showcase">
      <h2 className="section-title">OUR PROJECT</h2>
      <h3 className="section-subtitle">WHY WE ARE BEST</h3>
      <div className="content-wrapper">
        <div className="image-section">
          <img src={images[currentImageIndex]} alt="Project" />
        </div>
        <div className="text-section">
          {content.map((item, index) => (
            <div
              key={index}
              className={`content-item ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleContentClick(index)}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
