import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove, resetGame } from '../store/actions';

export default function GameContainer({ 
  children, 
  gameStateSelector = (state) => state 
}) {
  const gameState = useSelector(gameStateSelector);
  const dispatch = useDispatch();

  const handleCellClick = (index) => {
    dispatch(makeMove(index));
  };

  const handleRestart = () => {
    dispatch(resetGame());
  };

  return children({ 
    gameState, 
    onCellClick: handleCellClick, 
    onRestart: handleRestart 
  });
}

GameContainer.propTypes = {
  children: PropTypes.func.isRequired,
  gameStateSelector: PropTypes.func
};