import React from 'react';
import PropTypes from 'prop-types';
import GameSymbol from '../GameSymbol/GameSymbol';
import styles from './Field.module.css';

export default function Field({ field, onCellClick, disabled }) {
  const handleCellClick = (index) => {
    if (disabled || field[index] !== '') return;
    onCellClick(index);
  };

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>
        {field.map((value, index) => (
          <div
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            <GameSymbol value={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
