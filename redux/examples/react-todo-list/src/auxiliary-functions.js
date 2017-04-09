const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
  
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );

    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );

    default:
      return todos;
  }
}

let nextTodoId = 0;
const dispatchAddTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  });
}

const dispatchToggleTodo = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  });
}

const dispatchSetVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
}