import React, { Component } from "react";
// refactor the file path
import Contacts from "./components/contact/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contact/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Header branding='Contact Manager' />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
