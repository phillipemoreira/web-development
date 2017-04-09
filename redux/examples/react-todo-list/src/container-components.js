const { Component } = React;

const AddTodo = (props, { store }) => {
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
AddTodo.contextTypes = {
  store: React.PropTypes.object
};


class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = this.context;
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
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const props = this.props;
    const { store } = this.context;
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
FilterLink.contextTypes = {
  store: React.PropTypes.object
};