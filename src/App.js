import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <Contact name='John' email='a@a.com' phone='12345678' />
        </div>
      </div>
    );
  }
}

export default App;
