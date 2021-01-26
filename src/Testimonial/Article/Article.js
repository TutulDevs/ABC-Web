import React from "react";
import "./Article.css";

const home = (props) => {
  return (
    <article className='Article'>
      <span className='time'>{props.time}</span>

      <p className='message'>{props.message}</p>

      <p className='name'>- {props.name}</p>
    </article>
  );
};

export default home;
