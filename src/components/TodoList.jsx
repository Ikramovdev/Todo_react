import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Modal from './modal'
 

const TodoList = ({todos, setTodos}) => {
  const [upDateModal,setUpdateModal] = useState(false)

  function handeUpdateClick(e){
    console.log(e.target);
  }
  return (
    <>
    <ul className='w-[600px] bg-slate-400 space-y-5 p-5 mx-auto mt-5 rounded-lg'>
        {todos.map((item , index) => <TodoItem handeUpdateClick={handeUpdateClick} index={index} todos={todos} setTodos={setTodos} item={item} key={item.id}/>)}
    </ul>
    <Modal openModal={upDateModal} setOpenModal={setUpdateModal}>
         salom modal
    </Modal>
    </>
  )
}

export default TodoList