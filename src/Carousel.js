import{ useState, useEffect } from 'react';
import './styles/Carousel.css';
import img1 from './photo/c1.png'; 
import img2 from './photo/c2.png'; 
import img3 from './photo/c3.png'; 
import img4 from './photo/c4.png'; 

import Img from './photo/icon.png'; 

const images = [img1, img2, img3, img4];



const Carousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <h2 className="section-title">WHAT WE DO</h2>
      <div className='services'>
       <h1>SERVICES PROVIDE 
        FOR YOU</h1>
       <p className='para'>
       Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus,
        Morbi sed lacus nec risus finibus feugiat et fermentum
                </p>
      </div>
      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundImage: `url(${image})` }}
          >
            {hoveredIndex === index && (
              <div className="overlay">
                
                <img src={Img} alt="icon" className="icon" />
                <h3>WEB DEVELOPMENT</h3>
                <p>
                  Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque
                </p>
                <button onClick={() => window.open('https://fylehq.com', '_blank')}>READ MORE...</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
