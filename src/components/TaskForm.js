import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Añade tarea..."
        required
        value={title}
        onChange={handleChange}
      />
      <div className="buttons">
        <button type="submit" className="btn button">
          {editItem !== null ? 'Editar' : 'Añadir'}
        </button>
        <button onClick={clearList} className="btn button">
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
