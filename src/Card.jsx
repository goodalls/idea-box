import React from 'react';

let Card = props => {
  return (
    <article id={props.info.id} className="idea-card">
      <div className="card-line-1">
        <h2 className="title">
          {props.info.title}
        </h2>
        <button
          onClick={() => props.remove(props.info.id)}
          className="delete-idea-button"
        />
      </div>
      <p className="idea-body">
        {props.info.body}
      </p>
      <button onClick={()=> props.quality(props.info.id)} className="up-vote-button" />
      <button onClick={()=> props.quality(props.info.id)} className="down-vote-button" />
      <h3>
        Quality: <span className="quality">{props.info.quality}</span>
      </h3>
    </article>
  );
};

export default Card;
