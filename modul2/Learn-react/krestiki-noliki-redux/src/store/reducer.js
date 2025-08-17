import { MAKE_MOVE, RESET_GAME } from './actions';
import { WIN_PATTERNS } from '../constants/winPatterns';

const EMPTY_FIELD = Array(9).fill('');

const initialState = {
  field: EMPTY_FIELD,
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  winner: null
};

const checkWinner = (field, player) => {
  return WIN_PATTERNS.some(pattern =>
    pattern.every(index => field[index] === player)
  );
};

const checkDraw = (field) => {
  return field.every(cell => cell !== '');
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_MOVE: {
      const { index } = action.payload;
      
      if (state.isGameEnded || state.field[index] !== '') {
        return state;
      }

      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const hasWinner = checkWinner(newField, state.currentPlayer);
      const isDraw = !hasWinner && checkDraw(newField);

      return {
        ...state,
        field: newField,
        currentPlayer: hasWinner || isDraw ? state.currentPlayer : (state.currentPlayer === 'X' ? 'O' : 'X'),
        isGameEnded: hasWinner || isDraw,
        isDraw,
        winner: hasWinner ? state.currentPlayer : null
      };
    }

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
}