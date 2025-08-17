import React from 'react';
import { Provider } from 'react-redux';
import Game from './components/Game/Game';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
