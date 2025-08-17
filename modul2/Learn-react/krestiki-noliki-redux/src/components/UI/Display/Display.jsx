import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ content, className }) {
  return (
    <div className={className}>
      {content}
    </div>
  );
}

Display.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string
};