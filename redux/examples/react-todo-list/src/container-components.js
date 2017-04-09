const { Component } = React;

const AddTodo = ({ store }) => {
  let input;
  return (
    <div>
        <input type="text" 
          ref={node => {
            input = node;
          }} 
        />
        <button 
          onClick={() => {
            dispatchAddTodo(store, input.value);
            input.value =  '';
          }}
        >
        Add TODO
        </button>
    </div>
  )
}

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.props;
    const state = store.getState();

    return (
      <TodoList 
        store = { store }
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick = {dispatchToggleTodo }
      />
    );   
  }
}

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const { store } = this.props;
    const state = store.getState();

    return (
      <Link 
        active = { 
          props.filter === state.visibilityFilter
        }
        onClick = {() => {
          dispatchSetVisibilityFilter(store, props.filter)
        }}
      >
      { props.children }
      </Link>
    );
  }
}