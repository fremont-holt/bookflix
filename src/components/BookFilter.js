import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5%;
  color: #fff;
  height: 20px;
  width: 50%;
  margin: 10px;
  @media (min-width: 800px) {
    height: 30px;
    width: 260px;
    margin: 10px;
    font-size: 2em;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
`;

class BookFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onFilterTextChange(e) {
    this.props.handleFilterTextChange(e.target.value);
  }

  onSearchTextChange(e) {
    this.props.handleSearchTextChange(e.target.value);
  }

  onSearchSubmit(e) {
    e.preventDefault();
    this.props.handleSearchSubmit();
  }

  render() {
    return (
      <InputGroupWrapper>
        <SearchBox
          type="text"
          placeholder="Filter by title or author"
          onChange={this.onFilterTextChange}
          value={this.props.filterText}
        />
        <form onSubmit={this.onSearchSubmit}>
          <SearchBox
            type="text"
            placeholder="Search by author"
            onChange={this.onSearchTextChange}
            value={this.props.searchText}
          />
        </form>
      </InputGroupWrapper>
    );
  }
}

export default BookFilter;
