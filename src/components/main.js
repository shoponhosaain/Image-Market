import React, { useState, useEffect } from 'react';
import axios from 'axios'; // if using Axios
import Box from './Box';

const Main = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setImages(response.data.slice(0, 100)); // limit to first 10 images for this example
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <>
  
      
      <section className="gallery">
        {images.map(image => (
          <Box key={image.id} src={image.url} alt={image.title} />
        ))}
      
      </section>
   
    {/* {data.map((val)=>{
      
      
    })} */}
   
      
        
     
    </>
  );
};

export default Main;
