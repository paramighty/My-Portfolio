import React from 'react';

const CarouselCard = ({ children, description }) => {
  return (
    <div className='carousel-card'>
      {children}
      {description && <p className="carousel-card-description">{description}</p>}
    </div>
  );
};

export default CarouselCard;
