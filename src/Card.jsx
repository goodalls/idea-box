import React from "react";

let Card = props => {
  return (
    <article id={props.info.id} className="idea-card">
      <div className="card-line-1">
        <h2 className="title" contentEditable="true">
          {props.info.title}
        </h2>
        <button onClick="{(e) => props.cardHandeler(e)}" className="delete-idea-button" />
      </div>
      <p className="idea-body" contentEditable="true">
        {props.info.body}
      </p>
      <button className="up-vote-button" />
      <button className="down-vote-button" />
      <h3>
        Quality: <span className="quality">{props.info.quality}</span>
      </h3>
    </article>
  );
};

export default Card;
