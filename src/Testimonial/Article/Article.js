import React from "react";
import "./Article.css";

const home = (props) => {
  return (
    <article className='Article'>
      <h3 className='name'>{props.name}</h3>
      <p className='message'>{props.message}</p>
      <span className='time'>{props.time}</span>
    </article>
  );
};

export default home;
