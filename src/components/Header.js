import React from "react";
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
      <h1>{branding}</h1>
    </div>
  );
};
export default Header;
