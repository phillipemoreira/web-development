const AddTodo = ({ onAddClick }) => {
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
            onAddClick(input.value);
            input.value =  '';
          }}
        >
        Add TODO
        </button>
    </div>
  )
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    { todos.map(todo => 
      <Todo
        key={ todo.id }
        {...todo}
        onClick={ () =>  onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const Todo = ({ onClick, completed, text }) => (
  <li 
    onClick={ onClick }
    style = {{
      textDecoration :
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
)

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter = 'SHOW_ALL'
      currentFilter = { visibilityFilter }
      onClick = {onFilterClick}
    >
       All
    </FilterLink>
    {' '}
    <FilterLink
      filter = 'SHOW_ACTIVE'
      currentFilter = { visibilityFilter }
      onClick = {onFilterClick}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter = 'SHOW_COMPLETED'
      currentFilter = { visibilityFilter }
      onClick = {onFilterClick}
    >
      Completed
    </FilterLink>
  </p>
)

const FilterLink = ({filter, currentFilter, children, onClick}) => {
  if (filter === currentFilter) {
    return <span> { children } </span>
  }
  return (
    <a href="#" 
        onClick= {e => {
          e.preventDefault();
          onClick(filter);
        }}
    >
    {children}
    </a>
  )
}