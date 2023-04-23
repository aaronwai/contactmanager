import React from "react";
import PropTypes from "prop-types";

// Method 1 : normal way
// function Header(props) {
//   return (
//     <div>
//       <h1>{props.branding}</h1>
//     </div>
//   );
// }
// export default Header;

//  Method 2 : use destructure and arrow functions
const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};

const headingStyle = {
  color: "green",
  fontSize: "50px",
};
Header.defaultProps = {
  branding: "My App",
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
