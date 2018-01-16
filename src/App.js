import React, { Component } from "react";
import Header from "./Header.jsx";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <wrapper>
        <Header />

        <section class="form">
          <form>
            <label for="title-input" />
            <input
              type="text"
              id="title-input"
              name="title-input"
              required="true"
              placeholder="Title"
            />
            <label for="body-input" />
            <input
              type="text"
              id="body-input"
              name="body-input"
              required="true"
              placeholder="Body"
            />
            <label for="save-button" />
            <input
              type="button"
              value="save"
              id="save-button"
              disabled="true"
            />
            <label for="search-input" />
            <input
              type="text"
              id="search-input"
              name="search-input"
              required="true"
              placeholder="Search"
            />
          </form>
        </section>

        <section class="idea-section" />
      </wrapper>
    );
  }
}
