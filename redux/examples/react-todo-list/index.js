const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          id: action.id,
          text: action.text,
          completed: false
        };

    case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed
        };
  
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
  
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const { createStore} = Redux;
const store = createStore(todoApp);

// VIEW 888888888888888888888888888888888888888888888888888888888888888
// VIEW 888888888888888888888888888888888888888888888888888888888888888
// VIEW 888888888888888888888888888888888888888888888888888888888888888
// VIEW 888888888888888888888888888888888888888888888888888888888888888

let nextTodoId = 0;

const { Component } = React;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input type="text" id="fasd" ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          addTodo(this.input.value)
          this.input.value = '';
        }}>
        Add TODO
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}
                onClick={() => {
                  toggleTodo(todo)
                }}
                style = {{
                  textDecoration :
                    todo.completed ?
                      'line-through' :
                      'none'
                }}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const addTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    text: text,
    id: nextTodoId++
  });
}

const toggleTodo = (todo) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id: todo.id
  });
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

