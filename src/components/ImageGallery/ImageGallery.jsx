import { Component } from 'react';
import { ImageGalleryStyled, ImgeGalaryCent } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevName = prevProps.searchImg;
    const nextName = this.props.searchImg;

    if (prevName !== nextName) {
      this.setState({ status: 'pending', images: [], page: 1 });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=34809960-e72b1bf02b7f952b124a41dc8&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(data =>
            this.setState({ images: data.hits, status: 'resolved' })
          )
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  };

  loadMore = () => {
    const { searchImg } = this.props;
    const { page } = this.state;
    const nextPage = page + 1;

    this.setState({ status: 'resolved' });

    fetch(
      `https://pixabay.com/api/?q=${searchImg}&page=${nextPage}&key=34809960-e72b1bf02b7f952b124a41dc8&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
          page: nextPage,
        }))
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { images, status } = this.state;
    const { searchImg } = this.props;

    if (status === 'idle') {
      return null;
    }

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>Изображений на тему {searchImg} нет!</h2>;
    }
    if (status === 'resolved') {
      return (
        <ImgeGalaryCent>
          <ImageGalleryStyled>
            {images.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ImageGalleryStyled>
          <Button onClick={this.loadMore} />
        </ImgeGalaryCent>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchImg: PropTypes.string.isRequired,
};

export default ImageGallery;
