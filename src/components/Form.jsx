import { useRef } from "react"

const Form = ({exportTodo}) => {
  const inputRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputRef.current.value.trim().length === 0) {
      return
    }
    exportTodo(inputRef.current.value);
    inputRef.current.value = '';
  }

  return(
    <form onSubmit={handleSubmit} className="input-field">
      <input 
        type="text" 
        name="todo" 
        id="new-item"
        ref={inputRef}
        placeholder="Write a new todo"
      />
      <p>
        <button type="submit">Add Todo</button>
      </p>
    </form>
  )
}

export default Form