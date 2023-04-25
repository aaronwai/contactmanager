import React, { Component } from "react";

const Context = React.createContext();
// add more action function for CRUD
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
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
