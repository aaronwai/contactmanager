import React, { Component } from "react";

const Context = React.createContext();
// add dispatch into the state so at the contact.js, we can use consumer to pass dispatch function
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
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
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  // add reducer and dispatchers
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
