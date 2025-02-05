function InputEdit({todo, editTodo, cancelEdit}) {
    return (
      <>
        <input  
          type="text" 
          onBlur={(e) => editTodo(e, todo.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              editTodo(e, todo.id);
            } else if(e.key === 'Escape') {
              cancelEdit(todo.id)
            }
          }}
          name={todo.name} 
          defaultValue={todo.name}
          autoFocus
        />
      </>
    )
  }
  export default InputEdit