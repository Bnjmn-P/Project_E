import React from 'react';

const Gallery = ({ photoLinks }) => {
  return (
    <div className="gallery">
      {photoLinks.map((link, index) => (
        <img key={index} src={link} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
