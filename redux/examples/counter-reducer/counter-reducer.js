const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({});

  return {getState, dispatch, subscribe };
}

var store = createStore(counter);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>Hey {value}</h1>
    <button onClick= {onIncrement}>+</button>
    <button onClick= {onDecrement}>-</button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Counter
      value = {store.getState()}
      onIncrement = {() =>
         store.dispatch({
           type: 'INCREMENT'
          })
        }
      onDecrement = {() =>
         store.dispatch({
           type: 'DECREMENT'
          })
        }
    />, 
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
