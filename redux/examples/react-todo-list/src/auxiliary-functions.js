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

const dispatchAddTodo = (store, text) => {
  store.dispatch({
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  });
}

const dispatchSetVisibilityFilter = (store, filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
}