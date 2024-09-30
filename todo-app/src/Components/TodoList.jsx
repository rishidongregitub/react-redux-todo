import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const filterTodo = useSelector((state) => {
        const todos = state.todos.todos;
        const filter = state.todos.filter;
        const searchTerm = state.todos.searchTerm;

        return todos.filter((todo) => {
            const matchFilter =
                (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETED" && !todo.completed) ||
                (filter === "ALL");
            const matchSearch = todo.text && todo.text.toLowerCase().includes(searchTerm.toLowerCase());

            return matchFilter && matchSearch;
        });
    });

    console.log(filterTodo);
    return (
        <ul>
            <li className='my-2 text-sm italic'>All Your Notes Here..</li>
            {filterTodo.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>
    );
}

export default TodoList;
