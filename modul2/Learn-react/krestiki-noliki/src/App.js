import React from 'react';
import Game from './components/Game/Game';
import store from './store/store';

export default function App() {
  return <Game store={store} />;
}
