import React from "react";
import PropTypes from "prop-types"; //impt
// Step 1 : convert to arrow function format
// Step 2 : destructure the Props for variables
// Step 3 : copy obne of the from group inside the return
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className='form-control form-control-lg'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInputGroup.defaultProps = {
  type: "text",
};
export default TextInputGroup;
