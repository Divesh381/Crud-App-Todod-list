import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, emptyTodos } from '../../action/ActionIndex';
import { useState } from 'react';
import cuid from 'cuid';
import AddTodoStyle from'./AddTodos.module.css';

const AddTods = () => {
    const [tasks, setTask] = useState("");
    const dispatch = useDispatch();
    function handleInputChange(e) {
        setTask(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        dispatch(addTodos({ task: tasks, id: cuid() }))
        e.target.userInput.value = '';
    }

    return (
        <>
        <form onSubmit={handleFormSubmit} className={AddTodoStyle.containerAll}>
            <div className={AddTodoStyle.formHeadName}>Data List</div>
             <div className={AddTodoStyle.formcontainer}>
            <input type='name'  name='userInput'id={AddTodoStyle.userinput} onChange={(e) => handleInputChange(e)} />
            <button type='submit' id={AddTodoStyle.btn}>Add</button>
          </div>
        </form>
          <div> 
            <button className={AddTodoStyle.Emptydata} onClick={()=>dispatch(emptyTodos())}>Empty list</button>
          </div>
        </>

    )
}

export default AddTods;
