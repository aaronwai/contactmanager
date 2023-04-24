import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut
// we want to add state changing content within the onShowClick(), but we need to go through the concept first

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {};
  //   solution 2 : add constructor function, if no binding at the event, this is not a good way because set state within the constructor function
  constructor() {
    super();
    this.state = {};
    this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick() {
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
