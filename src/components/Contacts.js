import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
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

  deleteContact = (id) => {
    // destructure the contact
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContacts });
    console.log(id);
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
