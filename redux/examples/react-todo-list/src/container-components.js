const { Component } = React;

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

      <Footer />
    </div>
)

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link 
        active = { 
          props.filter === state.visibilityFilter
        }
        onClick = {() => {
          dispatchSetVisibilityFilter(props.filter)
        }}
      >
      { props.children }
      </Link>
    );
  }
}

store.subscribe(render);

// Render for the first time
render();

