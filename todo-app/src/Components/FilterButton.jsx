import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompleted } from '../redux/todoSlice';

const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.todos.filter); // Access correct slice

    const handleFilter = (filter) => {
        dispatch(filterTodo({ filter })); // Correct dispatch action
    };

    return (
        <div className='flex space-x-4 items-center'>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'
            >
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETED">Incompleted</option>
            </select>
            <button
                onClick={() => dispatch(markAllCompleted())} // Proper dispatch call
                className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'
            >
                Mark All Completed
            </button>
        </div>
    );
};

export default FilterButton;
