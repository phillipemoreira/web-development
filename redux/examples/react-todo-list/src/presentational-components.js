const TodoList = ({ store, todos, onTodoClick }) => (
  <ul>
    { todos.map(todo => 
      <Todo
        key={ todo.id }
        {...todo}
        onClick={ () =>  onTodoClick(store, todo.id)}
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

const Footer = ({ store }) => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
       All
    </FilterLink>
    {' '}
    <FilterLink filter = 'SHOW_ACTIVE'>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter = 'SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
)

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span> { children } </span>
  }
  return (
    <a href="#" 
        onClick= {e => {
          e.preventDefault();
          onClick();
        }}
    >
    {children}
    </a>
  )
}