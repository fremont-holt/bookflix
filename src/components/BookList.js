import React from "react";
import Book from "./Book";
import styled from "styled-components";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.setScroll = this.setScroll.bind(this);
    this.changeScrollPosition = this.changeScrollPosition.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scroller = React.createRef();
  }

  scrollLeft() {
    const newPosition = this.changeScrollPosition(-300);
    this.setScroll(newPosition);
  }

  scrollRight() {
    const newPosition = this.changeScrollPosition(300);
    this.setScroll(newPosition);
  }

  changeScrollPosition(scrollChange) {
    let newPosition = this.scroller.current.scrollLeft + scrollChange;
    if (newPosition <= 0) {
      newPosition = 1;
    } else if (newPosition > this.scroller.current.scrollWidth) {
      newPosition = this.scroller.current.scrollWidth;
    }
    return newPosition;
  }

  setScroll(newPosition) {
    this.scroller.current.scrollLeft = newPosition;
  }

  render() {
    const gutter = 20;

    const BookListContainer = styled.div`
      padding: ${gutter}px 0;
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

    const books = this.props.books.map(book => (
      <BookListScrollItem book={book} key={book.id} />
    ));

    return (
      <BookListContainer>
        <h3>{this.props.listTitle}</h3>
        <div className="scroller full">
          <ScrollButton className="left" onClick={this.scrollLeft}>
            <i className="arrow" />
          </ScrollButton>
          <BookListScroller className="full" ref={this.scroller}>
            {books}
          </BookListScroller>
          <ScrollButton className="right" onClick={this.scrollRight}>
            <i className="arrow" />
          </ScrollButton>
        </div>
      </BookListContainer>
    );
  }
}

export default BookList;
