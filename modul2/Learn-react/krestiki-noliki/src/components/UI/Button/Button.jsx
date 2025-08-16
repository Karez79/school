import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick, className, disabled }) {
  return (
    <button 
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};