const { Component } = React;

const AddTodo = () => {
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
            dispatchAddTodo(input.value);
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
      <TodoList 
        todos={
          getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick = { dispatchToggleTodo }
      />
    );   
  }
}

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