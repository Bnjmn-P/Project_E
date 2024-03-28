import React, { useState, useEffect } from 'react';

const CLIENT_ID = 'e47b8b9c49c0aa0';
const ACCESS_TOKEN = 'e9089bbf4af3989972b4ce6f5c84a07471fd8e25';

const Gallery2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch('https://api.imgur.com/3/accont/me/images', {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setImages(data.data);
      } else {
        console.error('Failed to fetch gallery:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  return (
    <div>
      <h1>Imgur Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <img key={image.id} src={image.link} alt={image.title} />
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
