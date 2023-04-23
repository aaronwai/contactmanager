import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    const { contacts } = this.state;
    // <h1>{contact.name}</h1>   first test with dummy h1 inside the map then rewrite with Contact
    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
