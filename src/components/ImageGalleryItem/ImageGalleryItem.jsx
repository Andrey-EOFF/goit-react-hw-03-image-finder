import React from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => (
  <ImageGalleryItemStyled>
    <ImageGalleryItemImage
      src={webformatURL}
      alt=""
      onClick={() => console.log(largeImageURL)}
    />
  </ImageGalleryItemStyled>
);

export default ImageGalleryItem;
