import React, { Component } from "react";
import PropTypes from "prop-types"; //impt as short cut

// Method 1 : normal props with this.pros
// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <ul>
//           <li>Email : {this.props.email}</li>
//           <li>Phone : {this.props.phone}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Contact;

// Method 2 : destructure the this.props
class Contact extends Component {
  //  method 2 : use static to write PropTypes and default propTypes values
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email : {email}</li>
          <li>Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

// Method 1 : noraml way to write the PropTypes
// Contact.PropTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
export default Contact;
