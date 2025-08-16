import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameSymbol.module.css';

export default function GameSymbol({ value, className }) {
  if (!value) return null;

  const symbolClass = value === 'X' ? styles.symbolX : styles.symbolO;

  return (
    <span className={`${styles.symbol} ${symbolClass} ${className || ''}`}>
      {value === 'X' ? '✖' : '◯'}
    </span>
  );
}

GameSymbol.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};