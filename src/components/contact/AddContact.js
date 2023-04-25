import React, { Component } from "react";

class AddContact extends Component {
  // add state for each input value
  state = {
    name: "",
    email: "",
    phone: "",
  };
  //    step 1 : put in h1 for testing purposes
  // Step 2 : add card inside the div for input form, same for regular html form creation
  //   Step 3a : add the event handlers for each input
  //   onNameChange = (e) => this.setState({ name: e.target.value });
  //   onEmailChange = (e) => this.setState({ email: e.target.value });
  //   onPhoneChange = (e) => this.setState({ phone: e.target.value });
  //   Step 3b : use generic event handlers e.target.name variable name must be the same as the state variable name, this is a shortcut way to accept variables
  //   Step 4 : add the cb for the onSubmit at the form tab
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onChange}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control form-control-lg'
                placeholder='Enter Name...'
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                name='phone'
                className='form-control form-control-lg'
                placeholder='Enter Phone...'
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type='submit'
              value='Add Contact'
              className='btn btn-block'
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
