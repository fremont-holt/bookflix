import React from "react";

class BookFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
  }

  onFilterTextChange(e) {
    this.props.handleFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label>
          Filter
          <input
            type="text"
            onChange={this.onFilterTextChange}
            value={this.props.filterText}
          />
        </label>
      </div>
    );
  }
}

export default BookFilter;
