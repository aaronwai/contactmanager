import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John",
        email: "a@a.com",
        phone: "123-45678",
      },
      {
        id: 2,
        name: "Jack",
        email: "b@b.com",
        phone: "123-45678",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
