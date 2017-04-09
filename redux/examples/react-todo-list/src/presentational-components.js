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
    <FilterLink
      filter='SHOW_ALL'
      store={ store }
    >
       All
    </FilterLink>
    {' '}
    <FilterLink
      filter = 'SHOW_ACTIVE'
      store={ store }
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter = 'SHOW_COMPLETED'
      store={ store }
    >
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