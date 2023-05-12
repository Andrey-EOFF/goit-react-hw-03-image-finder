import { Component } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import {
  SearchbarForm,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLbl,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handaleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <SearchbarForm>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <RiSearch2Line />
            <SearchFormBtnLbl>Search</SearchFormBtnLbl>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handaleChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchbarForm>
    );
  }
}

export default Searchbar;
