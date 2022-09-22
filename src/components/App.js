
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Axioslink from "../api/Axioslink";
import DisplaCars from "./DisplaCars";
class App extends Component {
  state = { image: [] };
  onsearchSubmit = async (term) => {
    const res = await Axioslink.get("/search/photos", {
      params: {
        query: term
      },
    });

    
    this.setState({ image: res.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar oneSubmit={this.onsearchSubmit} />
        <DisplaCars images={this.state.image }/>
      </div>
    );
  }
}
export default App;
