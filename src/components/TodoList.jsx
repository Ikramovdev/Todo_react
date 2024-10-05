import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,setTodos}) => {
  return (
    <ul className='w-[600px] bg-slate-400 space-y-5 p-5 mx-auto mt-5 rounded-lg'>
        {todos.map(item => <TodoItem todos={todos} setTodos={setTodos} item={item} key={item.id}/>)}
    </ul>
  )
}

export default TodoList