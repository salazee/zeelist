import React, { useState } from "react";

export const EditTodoForm = ({editTodo,task}) =>{
const [value, setValue] = useState(task.task)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="editTodo-btn">
        Update Task
      </button>
    </form>
    
    )
}