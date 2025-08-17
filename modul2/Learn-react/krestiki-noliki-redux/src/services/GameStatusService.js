export class GameStatusService {
  static getStatusMessage(gameState) {
    const { isDraw, isGameEnded, currentPlayer, winner } = gameState;
    
    if (isDraw) return 'Ничья';
    if (isGameEnded && winner) return `Победа: ${winner}`;
    return `Ходит: ${currentPlayer}`;
  }
}