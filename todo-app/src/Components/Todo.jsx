import { useState } from "react";
import { BsPatchPlusFill, BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import { addTodo, updateSearchTerm } from "../redux/todoSlice";

const Todo = () => {
    const dispatch = useDispatch();

    const [newtodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddTodo = (text) => {
        dispatch(addTodo({text}))
    }
    const handleAddTodoClick = () => {
        if (newtodoText.trim() !== "") {
            handleAddTodo(newtodoText.trim());
            setNewTodoText("");
        }
    }
    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm({searchTerm : value}))
    }
    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONAL TODO APP</h2>
            {/*Input text and btn*/}
            <div className="flex items-center mb-4">
                <input value={newtodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoinput" placeholder="Add Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button onClick={handleAddTodoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"><BsPatchPlusFill /></button>
            </div>
            {/*Input text and btn*/}
            <div className="flex items-center justify-between">
                <FilterButton/>
                <div className="flex items-center mb-4">
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Search" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button onClick={handleAddTodoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"><BsSearch /></button>
                </div>
            </div>
            <TodoList/>
        </div>
    )
}

export default Todo