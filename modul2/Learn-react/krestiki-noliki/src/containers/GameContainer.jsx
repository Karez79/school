import PropTypes from 'prop-types';
import { useStore } from '../hooks/useStore';
import { makeMove, resetGame } from '../store/actions';

export default function GameContainer({ 
  store, 
  children, 
  gameStateSelector = (state) => state 
}) {
  const gameState = useStore(store, gameStateSelector);

  const handleCellClick = (index) => {
    store.dispatch(makeMove(index));
  };

  const handleRestart = () => {
    store.dispatch(resetGame());
  };

  return children({ 
    gameState, 
    onCellClick: handleCellClick, 
    onRestart: handleRestart 
  });
}

GameContainer.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  gameStateSelector: PropTypes.func
};