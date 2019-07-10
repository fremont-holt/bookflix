import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5%;
  color: #fff;
  height: 20px;
  width: 150px;
  margin: 10px;
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
      <div>
        <label>
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
              value={this.props.SearchText}
            />
          </form>
        </label>
      </div>
    );
  }
}

export default BookFilter;
