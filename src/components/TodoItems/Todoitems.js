import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos, updateTodos } from '../../action/ActionIndex'
import TodoitemStyle from './Todoitems.module.css'
import { TiEdit } from "react-icons/ti";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();
  const textRef = useRef(null);

  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodos(textRef.current.value, task.id));
    setIsUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState} className={TodoitemStyle.formcontainer}>
        <input ref={textRef} className={TodoitemStyle.editInputUser} type='text' defaultValue={task.task} />
        <button type='submt' className={TodoitemStyle.btn}>Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <div className={TodoitemStyle.listitems}>
        {task.task !== '' ?

          (<li>
            {/* <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
        </div> */}

            {task.task}
            <div className={TodoitemStyle.Allbtn}>
              <div onClick={() => setIsUpdate(true)} className={TodoitemStyle.btnEdit} ><TiEdit /></div>
              <button onClick={() => dispatch(deleteTodos(task.id))} className={TodoitemStyle.btnDelete}>Delete</button>
            </div>
          </li>
          ) : (
            null
          )}
      </div>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;  
