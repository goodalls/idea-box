import React from "react";
import App from "./App.js";

export default props => {
  return (
    <div>
      <section class="idea-section">
        {
          console.log(App.state.cards);
          
          App.state.cards.map(card => {
          <Card {props} />;
        })
        };
      </section>
    </div>
  );
};
