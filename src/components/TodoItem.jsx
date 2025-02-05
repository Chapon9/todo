import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewText(todo.text);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // Toggle completion
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onRemove(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
