import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const BookCover = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 140px;
  height: 210px;
  transition: opacity 0.35s ease-in-out;

  @media (min-width: 800px) {
    width: 228px;
    height: 342px;
  }

  &:hover {
    opacity: 0.15;
    transition: opacity 0.5s ease-in-out;
  }
`;
const BookDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 140px;
  height: 210px;
  overflow-y: scroll;

  p {
    font-size: 1em;
  }

  h2 {
    margin: 0;
    font-size: 1.1em;
  }

  @media (min-width: 800px) {
    width: 228px;
    height: 342px;
    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1.4em;
    }
  }

  & .book-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;
  }
`;
class Book extends React.Component {
  render() {
    const book = this.props.book;
    const bookCover = `https://books.google.com/books/content?id=${
      book.id
    }&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api.jpg`;
    return (
      <Container>
        <BookCover src={bookCover} alt={`Book Cover for ${book.title}`} />
        <BookDetails className="details">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <div className="book-details">
            <span>Pages: {book.pageCount}</span>
            <span>Publish Date: {book.publishedDate}</span>
          </div>
        </BookDetails>
      </Container>
    );
  }
}

export default Book;
