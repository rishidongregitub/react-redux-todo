import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const filterTodo = useSelector((state) => {
        const todos = state.todos.todos; // Access todos correctly
        const filter = state.todos.filter; // Access filter correctly
        const searchTerm = state.todos.searchTerm; // Access searchTerm correctly

        return todos.filter((todo) => {
            const matchFilter = 
                (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETED" && !todo.completed) || 
                (filter === "ALL");

            // Add defensive checks
            const matchSearch = todo.text && todo.text.toLowerCase().includes(searchTerm.toLowerCase());

            return matchFilter && matchSearch;
        });
    });

    console.log(filterTodo);
    return (
        <ul>
            <li className='my-2 text-sm italic'>All Your Notes Here..</li>
            {filterTodo.map((todo,index) => (
               <TodoItem key={index} todo={todo} index={index}/>
            ))}            
        </ul>
    );
}

export default TodoList;
