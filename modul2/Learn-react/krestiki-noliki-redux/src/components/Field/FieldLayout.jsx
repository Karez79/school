import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

export default function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.grid}>
      {field.map((value, idx) => (
        <button
          key={idx}
          className={styles.cell}
          onClick={() => onCellClick(idx)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

FieldLayout.propTypes = {
  field:       PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};
