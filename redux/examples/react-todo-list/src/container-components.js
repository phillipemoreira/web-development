const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

const TodoApp = ({ todos, visibilityFilter }) => (
    <div>
      <AddTodo onAddClick={ dispatchAddTodo }/>

      <TodoList 
        todos={ getVisibleTodos(todos,visibilityFilter) }
        onTodoClick = { dispatchToggleTodo }
      />

      <Footer
        visibilityFilter = { visibilityFilter }
        onFilterClick = { dispatchSetVisibilityFilter }
      />
    </div>
)

store.subscribe(render);

// Render for the first time
render();

