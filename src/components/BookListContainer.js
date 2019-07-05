import React from "react";
import axios from "axios";
import BookList from "./BookList";
import { bookData, handleBookData } from "../helpers/data";

class BookListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookLists: [] };
  }

  componentDidMount() {
    const sampleAuthors = ["Brandon Sanderson", "Robert Jordan"];
    for (let author of sampleAuthors) {
      const url = new URL("https://www.googleapis.com/books/v1/volumes");
      url.searchParams.set("q", author);
      axios
        .get(url)
        .then(res => {
          const bookData = handleBookData(res.data.items);
          console.log(url);
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
  }

  render() {
    const books = handleBookData(bookData);
    const bookLists = Object.keys(this.state.bookLists).map(author => {
      return (
        <BookList
          books={this.state.bookLists[author]}
          listTitle={author}
          key={author}
        />
      );
    });
    return <div>{bookLists}</div>;
  }
}

export default BookListContainer;
