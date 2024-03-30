import React from 'react';

const Gallery3 = () => {
  const photoLinks = [
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://photos.app.goo.gl/oActawfx2hghfV2AA',
    'https://imgur.com/9SlmWCU',
    'https://i.imgur.com/9SlmWCU.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg'
  
  ];

  return (
    <div className="gallery">
      <h1>Gallery 3</h1>
      <div className="photo-grid">
        {photoLinks.map((link, index) => (
          <img key={index} src={link} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    <a href="https://imgur.com/9SlmWCU"><img src="https://i.imgur.com/9SlmWCU.png" title="source: imgur.com" /></a>

    </div>
  );
};

export default Gallery3;
