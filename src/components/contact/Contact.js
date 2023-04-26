import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };

  state = {
    showContactInfo: true,
  };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (id, dispatch) => {
    // use axios for delete and pass the id
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(dispatch({ type: "DELETE_CONTACT", payload: id }));
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4>
                {name}{" "}
                <i
                  className='fas fa-sort-down'
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                ></i>
                <i
                  className='fas fa-times'
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email : {email}</li>
                  <li className='list-group-item'>Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
