import IdeaSection from "./IdeaSection.jsx";
import React, { Component } from "react";
import Header from "./Header.jsx";
import "./css/styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { cards: [] };
    this.handleClick = this.handleClick.bind(this);
    this.cardHandeler = this.cardHandeler.bind(this);
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

  cardHandeler(e) {
    var id = $(e.target)
      .closest("article")
      .attr("id");
      console.log(e, 'cardhandler clicked');
      
  //   if ($(e.target).hasClass("up-vote-button")) {
  //     if (
  //       $(e.target)
  //         .siblings("h3")
  //         .text() === "Quality: Swill"
  //     ) {
  //       $(e.target)
  //         .siblings("h3")
  //         .text("Quality: Plausible");
  //       savingQualityModifier(id, "Plausible");
  //     } else if (
  //       $(e.target)
  //         .siblings("h3")
  //         .text() === "Quality: Plausible"
  //     ) {
  //       $(e.target)
  //         .siblings("h3")
  //         .text("Quality: Genius");
  //       savingQualityModifier(id, "Genius");
  //     }
  //   } else if ($(e.target).hasClass("down-vote-button")) {
  //     if (
  //       $(e.target)
  //         .siblings("h3")
  //         .text() === "Quality: Genius"
  //     ) {
  //       $(e.target)
  //         .siblings("h3")
  //         .text("Quality: Plausible");
  //       savingQualityModifier(id, "Plausible");
  //     } else if (
  //       $(e.target)
  //         .siblings("h3")
  //         .text() === "Quality: Plausible"
  //     ) {
  //       $(e.target)
  //         .siblings("h3")
  //         .text("Quality: Swill");
  //       savingQualityModifier(id, "Swill");
  //     }
    } if ([e.target].hasClass("delete-idea-button")) {
      $(e.target)
        .closest("article")
        .fadeOut(1000, function() {
          $(e.target)
            .closest("article")
            .remove();
          removeFromStorage(id);
        });
    }
  }

  componentDidMount() {
    //pull from storage if no cards
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

        <IdeaSection cardArray={this.state.cards}
                    cardHandeler={this.cardHandeler()} 
        />
      </div>
    );
  }
}
