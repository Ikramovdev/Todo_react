import React from 'react'

const TodoItem = ({item, todos, setTodos}) => {
  function handleDeleteBtn(id){
    const deleteTodo = todos.findIndex(item => item.id === id)
    todos.splice(deleteTodo,1)
    setTodos = ([...todos])
  }
  return (
    <li className='p-2 rounded-md bg-white flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
            <span>{item.id}</span>
            <strong>{item.value}</strong>
        </div>
        <div className='flex items-center space-x-2'>
            <button className='p-2 bg-blue-600 rounded-md font-semibold text-white hover:bg-transparent hover:text-blue-600 duration-300 border-[2px] border-transparent  hover:border-[2px] hover:border-blue-600'>More</button>
            <button className='p-2 bg-green-600 rounded-md font-semibold text-white hover:bg-transparent hover:text-green-600 duration-300 border-[2px] border-transparent  hover:border-[2px] hover:border-green-600'>Update</button>
            <button onClick={() => handleDeleteBtn(item.id)} className='delete-btn p-2 bg-red-600 rounded-md font-semibold text-white hover:bg-transparent hover:text-red-600 duration-300 border-[2px] border-transparent  hover:border-[2px] hover:border-red-600'>Delete</button>
        </div>
    </li>
  )
}

export default TodoItem
