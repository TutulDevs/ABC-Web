import React, { Component } from "react";
import "./Form.css";
import Spinner from "../../Spinner/Spinner";
import axios from "../../axios";

class Form extends Component {
  state = {
    name: "John Doe",
    message: "",
    time: "",
    Loading: false,
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

    // show spinner
    this.setState({ Loading: true });

    const obj = { ...this.state };
    //console.log(obj);

    // push the obj in Firebase
    axios
      .post("/abc/list.json", obj)
      .then((res) => {
        // make Spinner go away
        this.setState({ Loading: false });
        // go to testimonial page
        this.props.history.push("/testimonial");
      })
      .catch((err) => this.setState({ Loading: true }));

    // clear everything
    e.target.reset();
  };

  render() {
    let form = (
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
          required
          onChange={(e) => this.onInputHandler(e)}
        />
        <button className='submit'>Send 🚀</button>
      </form>
    );

    if (this.state.Loading) form = <Spinner />;

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

          {form}
        </div>
      </section>
    );
  }
}

export default Form;
