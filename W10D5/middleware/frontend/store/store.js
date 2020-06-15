import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = (store) => (next) => (action) => {
  console.log('Action:', action);
  console.log('Pre-dispatch state:', store.getState());
  next(action);
  console.log('Post-dispatch state:', store.getState());
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
