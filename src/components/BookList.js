import React from "react";
import Book from "./Book";
import styled from "styled-components";

const gutter = 20;

const BookListContainer = styled.div`
  padding: ${gutter / 2}px 0;
  display: grid;
  grid-gap: ${gutter}px 0;
  grid-template-columns: ${gutter}px 1fr ${gutter}px;
  align-content: start;

  & > * {
    grid-column: 2 / -2;
  }

  * > .full {
    grid-column: 1 / -1;
  }

  & .scroller {
    overflow-x: auto;
    padding: 10px 0;
    position: relative;
  }
`;
const BookListScrollItem = styled(Book)`
  grid-column: 2 / -2;
`;

const BookListScroller = styled.div`
  display: grid;
  grid-gap: calc(${gutter}px / 2);
  grid-template-columns: 10px;
  grid-template-rows: minmax(150px, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: max-content;

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * ${gutter}px);
  margin-bottom: calc(-0.25 * ${gutter}px);

  &:before,
  &:after {
    content: "";
    width: 10px;
  }
`;

const ScrollButton = styled.div`
  position: absolute;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 210px;
  background-color: #555;
  top: ${gutter / 2}px;

  @media (min-width: 800px) {
    height: 342px;
  }

  &.left {
    left: 20px;
    & .arrow {
      transform: rotate(-135deg);
    }
  }

  &.right {
    right: 0;
    & .arrow {
      transform: rotate(45deg);
    }
  }

  &:hover {
    opacity: 0.7;
  }

  & .arrow {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-width: 4px 4px 0 0;
    border-style: solid;
    margin: 10px;
    &:after,
    &:before {
      content: "";
      box-sizing: border-box;
    }
    &:before {
      right: 0;
      top: -3px;
      position: absolute;
      height: 4px;
      box-shadow: inset 0 0 0 32px;
      transform: rotate(-45deg);
      width: 23px;
      transform-origin: right top;
    }
  }
`;

const ListTile = styled.h3`
  margin: 10px 0;
`;
function BookList(props) {
  const scroller = React.createRef();
  const scrollLeft = () => {
    const newPosition = changeScrollPosition(-300);
    setScroll(newPosition);
  };

  const scrollRight = () => {
    const newPosition = changeScrollPosition(300);
    setScroll(newPosition);
  };

  const changeScrollPosition = scrollChange => {
    let newPosition = scroller.current.scrollLeft + scrollChange;
    if (newPosition <= 0) {
      newPosition = 1;
    } else if (newPosition > scroller.current.scrollWidth) {
      newPosition = scroller.current.scrollWidth;
    }
    return newPosition;
  };

  const setScroll = newPosition => {
    scroller.current.scrollLeft = newPosition;
  };
  const books = props.books.map(book => (
    <BookListScrollItem book={book} key={book.id} />
  ));

  return (
    <BookListContainer>
      <ListTile>{props.listTitle}</ListTile>
      <div className="scroller full">
        <ScrollButton className="left" onClick={scrollLeft}>
          <i className="arrow" />
        </ScrollButton>
        <BookListScroller className="full" ref={scroller}>
          {books}
        </BookListScroller>
        <ScrollButton className="right" onClick={scrollRight}>
          <i className="arrow" />
        </ScrollButton>
      </div>
    </BookListContainer>
  );
}

export default BookList;
