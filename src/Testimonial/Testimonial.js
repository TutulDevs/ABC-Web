import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Testimonial.css";
import Article from "./Article/Article";
import Spinner from "../Spinner/Spinner";
import axios from "./../axios";

class Testimonial extends Component {
  state = {
    list: [],
    loading: false,
  };

  componentDidMount() {
    // show spinner before resolution
    this.setState({ loading: true });

    axios
      .get("/abc.json")
      .then((res) => {
        console.log(res);
        const fetchedList = [];

        for (let key in res.data.list) {
          fetchedList.unshift({
            ...res.data.list[key],
            id: key,
          });
        }
        // remove spinner after resolving
        this.setState({ list: fetchedList, loading: false });
      })
      .catch((err) => this.setState({ loading: true }));
  }

  render() {
    let articles = this.state.list.map((el) => (
      <Article key={el.id} name={el.name} message={el.message} time={el.time} />
    ));

    if (this.state.loading) articles = <Spinner />;

    return (
      <section className='container section-container Testimonial'>
        {/* Go to the form component */}
        <div className='box-of-btn'>
          <Link to='/form' className='btn'>
            Write to us
          </Link>
        </div>

        {/* Show comments from Firebase */}
        <div className='articles'>
          {/* Articles */}
          {articles}
        </div>
      </section>
    );
  }
}

export default Testimonial;
