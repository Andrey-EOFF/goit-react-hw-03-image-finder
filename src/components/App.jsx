import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchImg: '',
  };

  handleSearch = searchImg => {
    this.setState({ searchImg });
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}

export default App;
