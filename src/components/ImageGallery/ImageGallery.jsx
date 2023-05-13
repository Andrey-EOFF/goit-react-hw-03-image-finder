import { Component } from 'react';
import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.searchImg;
    const nextName = this.props.searchImg;
    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=34809960-e72b1bf02b7f952b124a41dc8&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => this.setState({ images: data.hits }));
    }
  };

  render() {
    return (
      <ImageGalleryStyled>
        {this.state.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ImageGalleryStyled>
    );
  }
}

export default ImageGallery;
