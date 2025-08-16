import { useState, useEffect } from 'react';

export function useStore(store, selector = (state) => state) {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());
      setState(newState);
    });

    return unsubscribe;
  }, [store, selector]);

  return state;
}