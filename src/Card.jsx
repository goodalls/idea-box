import React from "react";

let Card = props => {
  let { id, title, body, quality } = props;

  return (
    <article id={id} className="idea-card">
      <div className="card-line-1">
        <h2 className="title" contenteditable="true">
          {title}
        </h2>
        <button className="delete-idea-button" />
      </div>
      <p className="idea-body" contenteditable="true">
        {body}
      </p>
      <button className="up-vote-button" />
      <button className="down-vote-button" />
      <h3>
        Quality: <span className="quality">{quality}</span>
      </h3>
    </article>
  );
};

export default Card;
