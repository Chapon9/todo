function ButtonDelete({todo, deleteTodo}) {
    return (
      <button 
        className="btn btn-danger"
        onClick={() => deleteTodo(todo.id)}
        disabled={todo.done ? false : true}
      >
        Delete
      </button>
      )
  }
  export default ButtonDelete