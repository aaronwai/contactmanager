import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut
// we want to add state changing content within the onShowClick(), but we need to go through the concept first

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {};
  // how event related to the event method, event is the the object that trigger and bind. for this case, event is from the icon element tab
  //  console.log will print the event element tab
  onShowClick = (e) => {
    console.log(e.target);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name} <i className='fas fa-sort-down' onClick={this.onShowClick}></i>
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email : {email}</li>
          <li className='list-group-item'>Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
