import React from 'react'
import { useSelector } from 'react-redux'
import Todoitems from '../TodoItems/Todoitems'

const List = () => {

  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return <Todoitems task={task} key={task.id} />;
  });

  return <div>{taskItems}</div>;
  // return <div>hello</div>;
};

export default List
