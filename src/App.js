import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Error from "./Error/Error";
import Form from "./Testimonial/ModalForm/Form";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {/* All the other components will go inside */}
        <main>
          <Switch>
            <Route path='/services' component={Services} />
            <Route path='/testimonial' component={Testimonial} />
            <Route path='/form' component={Form} />
            <Route path='/' exact component={Home} />
            <Redirect from='/home' to='/' />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
