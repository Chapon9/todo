
import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
