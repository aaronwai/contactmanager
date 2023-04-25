import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contact/Contacts";
import AddContact from "./components/contact/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
// Step 1 : import the rputer
// Step 2 : remove the addcontact component for the time being, we will link the component with the route
// Step 3 : wrap the router under the provider
// Step 4 : add switch to accept the route
// Step 5 : add about component so we add page folder for the each page with the component

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
