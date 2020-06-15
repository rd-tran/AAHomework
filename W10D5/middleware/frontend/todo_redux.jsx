import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// Phase 1
// function addLoggingToDispatch(store) {
//   const dispatch = store.dispatch;

//   return (action) => {
//     console.log('Action:', action);
//     console.log('Pre-dispatch state:', store.getState());
    
//     dispatch(action);
//     console.log('Post-dispatch state:', store.getState());
//   };
// }

// Phase 2
// const addLoggingToDispatch = (store) => (next) => (action) => {
//   console.log('Action:', action);
//   console.log('Pre-dispatch state:', store.getState());
//   debugger
//   next(action);
//   console.log('Post-dispatch state:', store.getState());
// };

// const applyMiddlewares = (store, middlewares) => {
//   let dispatch = store.dispatch;

//   for (let i = 0; i < middlewares.length; i++) {
//     let middleware = middlewares[i];
//     dispatch = middleware(store)(dispatch);
//     /*
//     *  If the middleware === addLoggingToDispatch,
//     *  then addLoggingToDispatch(store)(dispatch) === action,
//     *  and next === dispatch
//     */
//   }
  
//   return Object.assign({}, store, { dispatch });
// } 


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
    
  // Phase 1
  // store.dispatch = addLoggingToDispatch(store);

  // Phase 2
  // store = applyMiddlewares(store, [addLoggingToDispatch]);

  // Phase 3

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
