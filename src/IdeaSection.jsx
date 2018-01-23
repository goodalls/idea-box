import React from 'react';
import Card from './Card.jsx';

export default props => {
  return (
    <div>
      <section className="idea-section">
        <label htmlFor="search-input" />
        <input
          type="text"
          id="search-input"
          name="search-input"
          required="true"
          placeholder="Search"
        />
        {props.cardArray.map(card => (
          <Card
            info={card}
            key={card.id}
            cardHandeler={props.cardHandeler}
            remove={props.remove}
            quality={props.quality}
          />
        ))}
      </section>
    </div>
  );
};
