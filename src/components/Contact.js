import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut

class Contact extends Component {
  // refactor the contact to object because, we are passing contact object in now
  // amend the this.props.contact to refactor the changes from contacts.js
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email : {email}</li>
          <li className='list-group-item'>Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
