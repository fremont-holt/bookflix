import React from "react";
import axios from "axios";
import BookList from "./BookList";
import BookFilter from "./BookFilter";
import { bookData, handleBookData } from "../helpers/data";

class BookListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookLists: [], filterText: "", searchText: "" };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.authorSearch = this.authorSearch.bind(this);
  }

  componentDidMount() {
    const sampleAuthors = ["Brandon Sanderson", "Robert Jordan"];
    for (let author of sampleAuthors) {
      this.authorSearch(author);
    }
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText });
  }

  handleSearchTextChange(searchText) {
    this.setState({ searchText });
  }

  handleSearchSubmit() {
    this.authorSearch(this.state.searchText);
    this.setState({ searchText: "" });
  }

  authorSearch(author) {
    const url = new URL("https://www.googleapis.com/books/v1/volumes");
    url.searchParams.set("q", author);
    axios
      .get(url)
      .then(res => {
        const bookData = handleBookData(res.data.items);
        const bookLists = {
          ...this.state.bookLists,
          [author]: bookData
        };
        this.setState({ bookLists });
      })
      .catch(function(error) {
        console.log(error);
        const bookLists = {
          ...this.state.bookLists,
          "Brandon Sanderson": handleBookData(bookData)
        };
        this.setState({ bookLists });
      });
  }

  render() {
    let authors = Object.keys(this.state.bookLists);
    const bookLists = authors.reverse().map(author => {
      const books = this.state.bookLists[author].filter(book =>
        `${book.title},${book.author}`
          .toLowerCase()
          .includes(this.state.filterText.toLowerCase())
      );
      if (books.length > 0) {
        return <BookList books={books} listTitle={author} key={author} />;
      }
      return null;
    });
    return (
      <div>
        <BookFilter
          handleFilterTextChange={this.handleFilterTextChange}
          handleSearchTextChange={this.handleSearchTextChange}
          handleSearchSubmit={this.handleSearchSubmit}
          filterText={this.state.filterText}
          searchText={this.state.searchText}
        />
        {bookLists}
      </div>
    );
  }
}
export default BookListContainer;
