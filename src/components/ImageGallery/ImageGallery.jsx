const { Component } = require('react');

class ImageGallery extends Component {
    state = {};
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.searchImg !== this.searchImg) {
          
            // fetch
      }
    }
    
  render() {
    return <ul className="gallery"></ul>;
  }
}

export default ImageGallery;
