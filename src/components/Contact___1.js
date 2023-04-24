import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut
// we want to add state changing content within the onShowClick(), but we need to go through the concept first

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {};
  onShowClick() {
    // this is return error, because this is undefined, onShowClick is not react Component's lifecycle method ，
    console.log(this.state);
  }
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
