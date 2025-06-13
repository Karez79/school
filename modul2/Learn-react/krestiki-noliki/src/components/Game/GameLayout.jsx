import React from 'react';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';

export default function GameLayout({
  field,
  currentPlayer,
  isGameEnded,
  isDraw,
  onCellClick,
  onRestart,
}) {
  return (
    <div className={styles.wrapper}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />

      <Field field={field} onCellClick={onCellClick} />

      <button className={styles.restart} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  field:          PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPlayer:  PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded:    PropTypes.bool.isRequired,
  isDraw:         PropTypes.bool.isRequired,
  onCellClick:    PropTypes.func.isRequired,
  onRestart:      PropTypes.func.isRequired,
};
