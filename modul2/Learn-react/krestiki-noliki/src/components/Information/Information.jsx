import React from 'react';
import InformationLayout from './InformationLayout';

export default function Information({ currentPlayer, isGameEnded, isDraw }) {
  let text;
  if (isDraw) text = 'Ничья';
  else if (isGameEnded) text = `Победа: ${currentPlayer}`;
  else text = `Ходит: ${currentPlayer}`;

  return <InformationLayout text={text} />;
}
