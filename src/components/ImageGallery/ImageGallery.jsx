import { Component } from 'react';
import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.searchImg;
    const nextName = this.props.searchImg;

    if (prevName !== nextName) {
      this.setState({ isLoading: true });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=34809960-e72b1bf02b7f952b124a41dc8&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(data => this.setState({ images: data.hits }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ isLoading: false }));
      }, 3000);
    }
  };

  render() {
    const { isLoading, images, error } = this.state;
    const { searchImg } = this.props;

    return (
      <ImageGalleryStyled>
        {error && <h2>Изображений на тему {searchImg} нет!</h2>}
        {isLoading && <Loader />}
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ImageGalleryStyled>
    );
  }
}

export default ImageGallery;
