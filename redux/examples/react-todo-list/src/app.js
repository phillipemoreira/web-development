const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

const { Provider } = ReactRedux;
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={ createStore(todoAppReducers) }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);