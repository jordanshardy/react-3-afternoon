import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";
import Axios from "axios";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            type="text"
            onChange={e => this.props.searchPostFn(e.target.value)}
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}
