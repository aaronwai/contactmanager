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
  //   instead of long variables list into the contact.js, we use contact as object passing into the contact.js
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
