import React from 'react';
import PropTypes from 'prop-types';
import Display from '../UI/Display/Display';
import { GameStatusService } from '../../services/GameStatusService';
import styles from './Information.module.css';

export default function Information({ gameState, statusService = GameStatusService }) {
  const statusMessage = statusService.getStatusMessage(gameState);

  return (
    <Display 
      content={statusMessage}
      className={styles.info}
    />
  );
}

Information.propTypes = {
  gameState: PropTypes.shape({
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
    winner: PropTypes.string
  }).isRequired,
  statusService: PropTypes.object
};
