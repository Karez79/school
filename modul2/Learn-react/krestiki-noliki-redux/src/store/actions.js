export const MAKE_MOVE = 'MAKE_MOVE';
export const RESET_GAME = 'RESET_GAME';

export const makeMove = (index) => ({
  type: MAKE_MOVE,
  payload: { index }
});

export const resetGame = () => ({
  type: RESET_GAME
});