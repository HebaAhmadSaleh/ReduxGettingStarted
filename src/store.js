

export const createStore = (reducer) => {
      let state;
      let listeners = [];
      const getState = () => state;
      const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listeners())
      }
      const subscribe = (listener) => {
        listeners.push(listener);
        return listeners.filter((l) => l !== listener)
      }
      dispatch({}); //call for the first time to get initial state
      return { getState, subscribe, dispatch }
    }