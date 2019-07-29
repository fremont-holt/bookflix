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

function BookFilter(props) {
  const onFilterTextChange = e => {
    props.handleFilterTextChange(e.target.value);
  };

  const onSearchTextChange = e => {
    props.handleSearchTextChange(e.target.value);
  };

  const onSearchSubmit = e => {
    e.preventDefault();
    props.handleSearchSubmit();
  };
  return (
    <InputGroupWrapper>
      <SearchBox
        type="text"
        placeholder="Filter by title or author"
        onChange={onFilterTextChange}
        value={props.filterText}
      />
      <form onSubmit={onSearchSubmit}>
        <SearchBox
          type="text"
          placeholder="Search by author"
          onChange={onSearchTextChange}
          value={props.searchText}
        />
      </form>
    </InputGroupWrapper>
  );
}

export default BookFilter;
