import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut
// we want to add state changing content within the onShowClick(), but we need to go through the concept first

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  state = {};
  // add id parameter to the event callback function, the parameter as first argument and event as the last argument link to the event callback.
  // or name parameter to the event callback function, change the 1 to name @ line 24
  onShowClick = (id, e) => {
    console.log(e.target);
    console.log(id);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name}{" "}
          <i
            className='fas fa-sort-down'
            onClick={this.onShowClick.bind(this, name)}
          ></i>
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
