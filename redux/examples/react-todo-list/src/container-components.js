const { Component } = React;
const { connect } = ReactRedux;

// AddTodo ========================================================
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
            dispatch(addTodo(input.value));
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
      dispatch(toggleTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

// FilterLink =====================================================
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active :  
      ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick : () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);