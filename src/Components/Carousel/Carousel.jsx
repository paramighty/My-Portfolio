import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const Carousel = ({ children, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      {description && <p className="carousel-description">{description}</p>}

      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return <div className="carousel-item">{child}</div>;
        })}
      </div>

      <ol className="indicators">
        {React.Children.map(children, (child, index) => (
          <li
            className={`${index === activeIndex ? "active" : ""}`}
            onClick={() => updateIndex(index)}
          />
        ))}
      </ol>
    </div>
  );
};

export default Carousel;
