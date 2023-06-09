import React, { Component } from "react";
// use ref of the props value method to keep accessing Dom element current value
// createRef() returns a object with current property, and depend on the structure of the element, it can further access the value or other properties, most of the time, we care about the value part of the element
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: "john",
    email: "a@a.com",
    phone: "1234556",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  render() {
    const { name, email, phone } = this.props;
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
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                name='phone'
                className='form-control form-control-lg'
                placeholder='Enter Phone...'
                defaultValue={phone}
                ref={this.phoneInput}
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
