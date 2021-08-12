import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        // assign a key to root element for a list
        key={image.id}
        image={image}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
