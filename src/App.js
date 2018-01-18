import React, { Component } from "react";
import Header from "./Header.jsx";
import "./css/styles.css";
import IdeaSection from "./IdeaSection.jsx";

export default class App extends Component {
  constructor() {
    super();
    this.state = { cards: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let cardID = Date.now();
    let cardTitle = document.querySelector("#title-input").value;
    let cardBody = document.querySelector("#body-input").value;
    let cardQuality = "Swill";
    this.setState({
      cards: [
        ...this.state.cards,
        {
          id: cardID,
          title: cardTitle,
          body: cardBody,
          quality: cardQuality
        }
      ]
    });
    this.storeIdea(cardID, cardTitle, cardBody, cardQuality);
    // inputReset();
  }

  storeIdea(cardID, cardTitle, cardBody, cardQuality) {
    let idea = {
      id: cardID,
      title: cardTitle,
      body: cardBody,
      quality: cardQuality
    };
    let stringifiedIdea = JSON.stringify(idea);
    localStorage.setItem(cardID, stringifiedIdea);
    // ideaArchive(id);
  }

  removeFromStorage(id) {
    localStorage.removeItem(id);
  }

  render() {
    return (
      <div>
        <Header />

        <section className="form">
          <form>
            <label htmlFor="title-input" />
            <input
              type="text"
              id="title-input"
              name="title-input"
              required="true"
              placeholder="Title"
            />
            <label htmlFor="body-input" />
            <input
              type="text"
              id="body-input"
              name="body-input"
              required="true"
              placeholder="Body"
            />
            <label htmlFor="save-button" />
            <input
              type="button"
              value="save"
              id="save-button"
              onClick={this.handleClick}
            />
          </form>
        </section>

        <IdeaSection cardArray={this.state.cards} />
      </div>
    );
  }
}
