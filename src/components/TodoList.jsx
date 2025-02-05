import { useState } from "react";
import ButtonDelete from "./ButtonDelete";
import InputEdit from "./InputEdit";
import InputTodo from "./InputTodo";
import LabelTodo from "./LabelTodo";
import TodoFilters from "./TodoFilters";

const TodoList = (
  { todos, 
    handleCheck, 
    deleteTodo, 
    deleteAllTodosCompleted,
    markAsEditing,
    editTodo,
    cancelEdit,
    todosFiltered
  }) => {

  const [filter, setFilter] = useState('');
  const todoLeft = todos.filter(todo => !todo.done);

  const applyFilter = (choice) => {
    setFilter(choice)
  }
  
  return(
      <section className="todos-container">
        <h2>Todos</h2>
        <ul className="todo-list">
        {todosFiltered(filter).map((todo) => (
          <li key={todo.id} className="todo">

            <InputTodo todo={todo} handleCheck={handleCheck} />
            {!todo.isEditing ? (
              <LabelTodo todo={todo} markAsEditing={markAsEditing} />
            ) : (
              <InputEdit todo={todo} editTodo={editTodo} cancelEdit={cancelEdit}
              />
            )}
            <ButtonDelete todo={todo} deleteTodo={deleteTodo}/>

          </li>
        ))}
        </ul>

        <p>{todoLeft.length} todos left</p>

        <TodoFilters 
          filter={filter}
          applyFilter={applyFilter}
          deleteAllTodosCompleted={deleteAllTodosCompleted} />

      </section>
  )
}

export default TodoList