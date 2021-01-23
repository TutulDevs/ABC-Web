import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <section className='container section-container Home'>
      <h1>ABC Web Solutions</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </p>

      {/* Take me to Servicessssss */}
      <Link to='/services'>See Services</Link>
    </section>
  );
};

export default home;
