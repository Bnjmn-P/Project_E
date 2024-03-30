import React, { useState, useEffect } from 'react';

const CLIENT_ID = 'e47b8b9c49c0aa0';
const ACCESS_TOKEN = 'your_access_token_here'; // Replace 'your_access_token_here' with your actual access token

const GalleryWithAccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchAccountInfo();
    fetchGallery();
  }, []);

  const fetchAccountInfo = async () => {
    try {
      const response = await fetch('https://api.imgur.com/3/account/me', {
        headers: {
          Authorization: `Client-ID ${CLIENT_ID}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAccountInfo(data.data);
      } else {
        console.error('Failed to fetch account info:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching account info:', error);
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await fetch('https://api.imgur.com/3/account/me/images', {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
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
      <h1>Imgur Account Info</h1>
      <div>
        <h2>Account Information</h2>
        <p>Username: {accountInfo.url}</p>
        {/* Display other account information as needed */}
      </div>
      <h1>Imgur Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <img key={image.id} src={image.link} alt={image.title} />
        ))}
      </div>
    </div>
  );
};

export default GalleryWithAccountInfo;
