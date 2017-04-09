const { createStore} = Redux;

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={ store }/>
    <VisibleTodoList store={ store }/>
    <Footer store={ store }/>
  </div>
)

ReactDOM.render(
  <TodoApp 
    store={ createStore(todoAppReducers) }
  />,
  document.getElementById('root')
);