function LabelTodo({todo, markAsEditing}) {
    return (
      <label  
        className={todo.done ? "line-through" : ""} 
        onDoubleClick={() => markAsEditing(todo.id)}
      >
        {todo.name}
      </label>
    )
  }
  export default LabelTodo