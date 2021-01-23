import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Testimonial.css";
import Article from "./Article/Article";
import axios from "./../axios";

class Testimonial extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    axios.get("/testimonial.json").then((res) => {
      const fetchedList = [];

      for (let key in res.data.lists) {
        fetchedList.push({
          ...res.data.lists[key],
          id: key,
        });
      }
      this.setState({ list: fetchedList });
      console.log(this.state.list);
    });
  }

  render() {
    return (
      <section className='container section-container Testimonial'>
        {/* Go to the form component */}
        <div className='box-of-btn'>
          <Link to='/form' className='btn'>
            Write to me
          </Link>
        </div>

        {/* Show comments from Firebase */}
        <div className='articles'>
          {this.state.list.map((el) => {
            return (
              <Article
                key={el.id}
                name={el.name}
                message={el.message}
                time={el.time}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Testimonial;
