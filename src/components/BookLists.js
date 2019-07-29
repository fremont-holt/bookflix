import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./BookList";
import BookFilter from "./BookFilter";
import { bookData, handleBookData } from "../helpers/data";

function BookLists(props) {
  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [authorBookLists, setAuthorBookLists] = useState({});

  const authorSearch = author => {
    const url = new URL("https://www.googleapis.com/books/v1/volumes");
    url.searchParams.set("q", author);
    return axios.get(url);
  };

  const handleFilterTextChange = filterText => {
    setFilterText(filterText);
  };

  const handleSearchTextChange = searchText => {
    setSearchText(searchText);
  };

  const handleSearchSubmit = () => {
    authorSearch(searchText)
      .then(res => {
        const bookData = handleBookData(res.data.items);
        setAuthorBookLists({ ...authorBookLists, [searchText]: bookData });
      })
      .catch(function(error) {
        console.log(error);
      });
    setSearchText("");
  };

  useEffect(() => {
    if (Object.keys(authorBookLists).length === 0) {
      const author = "Brandon Sanderson";
      authorSearch(author)
        .then(res => {
          const bookData = handleBookData(res.data.items);
          setAuthorBookLists({ ...authorBookLists, [author]: bookData });
        })
        .catch(function(error) {
          console.log(error);
          const updatedBookLists = {
            ...authorBookLists,
            [author]: handleBookData(bookData)
          };
          setAuthorBookLists(updatedBookLists);
        });
    }
  }, [authorBookLists]);

  let authors = Object.keys(authorBookLists);
  const bookListComponents = authors.reverse().map(author => {
    const books = authorBookLists[author].filter(book =>
      `${book.title},${book.author}`
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
    if (books.length > 0) {
      return <BookList books={books} listTitle={author} key={author} />;
    }
    return null;
  });

  return (
    <div>
      <BookFilter
        handleFilterTextChange={handleFilterTextChange}
        handleSearchTextChange={handleSearchTextChange}
        handleSearchSubmit={handleSearchSubmit}
        filterText={filterText}
        searchText={searchText}
      />
      {bookListComponents}
    </div>
  );
}

export default BookLists;
