function InputTodo({todo, handleCheck}) {
  return (
    <>
      <input  
        type="checkbox" 
        name={todo.name} 
        id={todo.id} 
        checked={todo.done}
        onChange={() => handleCheck(todo.id) }
      />
    </>
  )
}

export default InputTodo