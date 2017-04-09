const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

const { createStore} = Redux;

ReactDOM.render(
  <Provider store={ createStore(todoAppReducers) }>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);