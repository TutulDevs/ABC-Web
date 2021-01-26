import React from "react";
import "./Services.css";

const services = () => {
  return (
    <section className='container section-container Services'>
      <div className='section-header'>
        <h1>Our Services</h1>
      </div>

      <div className='boxes'>
        <div className='box'>
          <h2>Mind boggling performance</h2>
          <p>
            Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
            gravida odio porttitor sem non mi integer non faucibus.
          </p>
        </div>
        <div className='box'>
          <h2>Exotic UI</h2>
          <p>
            Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
            gravida odio porttitor sem non mi integer non faucibus.
          </p>
        </div>
        <div className='box'>
          <h2>Darn good support</h2>
          <p>
            Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
            gravida odio porttitor sem non mi integer non faucibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default services;
