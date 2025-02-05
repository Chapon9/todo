import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
//import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';


const LSKEY = "MyTodoApp";
const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"))

function App() {
  /* const initialTodos = [
    { 
      id: uuidv4(),
      name: "My first todo",
      done: false
    }, 
    { 
      id: uuidv4(),
      name: "My second todo",
      done: true
    }
  ]; */
  // Initialize the state
  const [todos, setTodos] = useState(initialTodos ?? []);

  // Filter Todos
  const todosFiltered = (filter) => {
    switch(filter) {
      case "Active":
        return todos.filter( todo => todo.done === false)
      case "Completed":
        return todos.filter( todo => todo.done === true)
      default:
        return todos
    }
  }

  // Add a todo to the state
  const addTodo = (todo) => {
    setTodos([...todos, { 
      id: uuidv4(), 
      name: todo, 
      done: false, 
      isEditing: false,
      category: ""
    }]);
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(
      todo => todo.id !== id
    ))
  }

  const deleteAllTodosCompleted = () => {
    const todosNotCompleted = todos.filter(todo => !todo.done)
    setTodos(todosNotCompleted)
  }

  // Handle checkbox status
  const handleCheck = (id) => {
    setTodos( todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, 
            done: !todo.done
          }
        }
        return todo
      })
    )
  }

  const markAsEditing = (id) => {
    setTodos( todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isEditing: true
        }
      }
      return todo
    }))
  }

  const editTodo = (e, id) => {
    setTodos( todos.map( todo => {
      if(todo.id === id) {
        // if input is empty
        if(e.target.value.trim().length === 0) {
          todo.isEditing = false
          return todo
        }
        return {
          ...todo,
          name: e.target.value,
          isEditing: false
        }
      }
      return todo
    }))
  }

  const cancelEdit = (id) => {
    setTodos( todos.map( todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isEditing: false
        }
      }
      return todo
    }))
  }

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return(
    <>
      <Header />
      <main>
        <Form exportTodo={addTodo} />
        <TodoList 
          todos={todos} 
          handleCheck={handleCheck} 
          deleteTodo={deleteTodo} 
          deleteAllTodosCompleted={deleteAllTodosCompleted}
          markAsEditing={markAsEditing}
          editTodo={editTodo}
          cancelEdit={cancelEdit}
          todosFiltered={todosFiltered}
        />
      </main>
    </>
  )
}

export default App