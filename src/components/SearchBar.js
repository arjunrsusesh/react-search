import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }
  submitCode = (event) => {
    event.preventDefault();
    this.props.oneSubmit(this.state.term);
  };

  onInputChange = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitCode}>
          <div className="field">
            <label>image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
