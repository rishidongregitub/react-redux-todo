import React from 'react';
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { markCompleted, markIncompleted, removeTodo, toggleTodo } from '../redux/todoSlice';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : ""}`}>{todo.text}</span>
      </div>
      <div className="space-x-3 ml-3">
        <button
          onClick={() => dispatch(toggleTodo({ id: todo.id }))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          onClick={() => dispatch(removeTodo({ id: todo.id }))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
          title="Remove todo"
        >
          <FaTrash />
        </button>
        {todo.completed ? (
          <button
            onClick={() => dispatch(markIncompleted({ id: todo.id }))}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
            title="Mark as incomplete"
          >
            <FaTimes />
          </button>
        ) : (
          <button
            onClick={() => dispatch(markCompleted({ id: todo.id }))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
            title="Mark as complete"
          >
            <FaCheck />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;