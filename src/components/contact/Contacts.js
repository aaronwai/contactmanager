import React, { Component } from "react";
import Contact from "./Contact";
// refactor the file path to one level up
import { Consumer } from "../../context";
export class Contacts extends Component {
  //  remove the delete function , remove the deleteClickHandler

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className='display-4 mb-2'>Contact List</h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
