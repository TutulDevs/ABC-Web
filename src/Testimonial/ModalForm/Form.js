import axios from "axios";
import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    message: "",
    time: "",
  };

  onInputHandler = (e) => {
    const [el, val] = [e.target.id, e.target.value];
    const time = String(new Date()).slice(4, 15);

    if (el === "name") this.setState({ name: val });
    if (el === "message") this.setState({ message: val });
    this.setState({ time: time });
  };

  formHandler = (e) => {
    e.preventDefault();

    let obj = { ...this.state };

    // push the obj in Firebase
    axios
      .post("testimonial/lists.json", obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // clear everything
    //e.target.reset();

    console.log(obj);
  };

  render() {
    return (
      <section className='container section-container Backdrop'>
        {/* Info  */}
        <div className='info'>
          <p>
            ℹ This is just a fun project. Your data will be stored in Firebase's
            Real-time DataBase. Nothing will be stored for sneaking your webcam
            😂
          </p>
        </div>
        <div className='Modal'>
          {/* Actual form */}
          <form className='Form' onSubmit={this.formHandler}>
            <input
              type='text'
              placeholder='Name'
              id='name'
              onChange={(e) => this.onInputHandler(e)}
            />
            <textarea
              placeholder='Message'
              id='message'
              onChange={(e) => this.onInputHandler(e)}
            />
            <button className='submit'>Send 🚀</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
