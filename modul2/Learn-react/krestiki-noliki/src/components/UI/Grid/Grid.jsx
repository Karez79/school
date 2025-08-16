import React from 'react';
import PropTypes from 'prop-types';

export default function Grid({ items, renderItem, className }) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string
};