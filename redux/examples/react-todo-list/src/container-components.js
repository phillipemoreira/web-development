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
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active :  
      ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onTodoClick : () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  }
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);