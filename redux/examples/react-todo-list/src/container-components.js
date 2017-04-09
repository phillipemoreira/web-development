const { Component } = React;
const { connect } = ReactRedux;

// AddTodo ========================================================
let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
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
            dispatch({
              type: 'ADD_TODO',
              text: input.value,
              id: nextTodoId++
            });
            input.value =  '';
          }}
        >
        Add TODO
        </button>
    </div>
  )
}
AddTodo = connect()(AddTodo);

// VisibleTodoList ===============================================
const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick : (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  }
}
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

// FilterLink =====================================================
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