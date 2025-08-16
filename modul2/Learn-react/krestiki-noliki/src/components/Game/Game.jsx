import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../../containers/GameContainer';
import Information from '../Information/Information';
import Field from '../Field/Field';
import Button from '../UI/Button/Button';
import styles from './Game.module.css';

export default function Game({ store }) {
  return (
    <GameContainer store={store}>
      {({ gameState, onCellClick, onRestart }) => (
        <div className={styles.wrapper}>
          <Information gameState={gameState} />
          
          <Field 
            field={gameState.field} 
            onCellClick={onCellClick}
            disabled={gameState.isGameEnded}
          />
          
          <Button 
            className={styles.restart} 
            onClick={onRestart}
          >
            Начать заново
          </Button>
        </div>
      )}
    </GameContainer>
  );
}

Game.propTypes = {
  store: PropTypes.object.isRequired
};
