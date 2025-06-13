import React, { useState } from 'react';
import GameLayout from './GameLayout';
import { WIN_PATTERNS } from '../../constants/winPatterns';

const EMPTY_FIELD = [...Array(9)].map(() => '');

export default function Game() {
  const [field, setField]       = useState(EMPTY_FIELD);
  const [current, setCurrent]   = useState('X');
  const [ended, setEnded]       = useState(false);
  const [draw, setDraw]         = useState(false);

  const handleCellClick = (index) => {
    if (ended || field[index]) return;

    const next = [...field];
    next[index] = current;
    setField(next);

    const win = WIN_PATTERNS.some(p =>
      p.every(i => next[i] === current),
    );

    if (win) {
      setEnded(true);
      return;
    }

    if (next.every(Boolean)) {
      setDraw(true);
      setEnded(true);
      return;
    }

    setCurrent(current === 'X' ? '0' : 'X');
  };

  const resetGame = () => {
    setField(EMPTY_FIELD);
    setCurrent('X');
    setEnded(false);
    setDraw(false);
  };

  return (
    <GameLayout
      field={field}
      currentPlayer={current}
      isGameEnded={ended}
      isDraw={draw}
      onCellClick={handleCellClick}
      onRestart={resetGame}
    />
  );
}
