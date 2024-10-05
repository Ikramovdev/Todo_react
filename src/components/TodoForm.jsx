import React from 'react'

const TodoForm = ({todos,setTodos}) => {
    function handleSubmitForm(e){
        e.preventDefault()
        const data ={
            id:todos.length +1,
            value:e.target.todoValue.value,
        }
        setTodos ([...todos, data])
        e.target.reset()
    }
  return (
    <form onSubmit={handleSubmitForm} className='w-[600px] p-3 bg-slate-400 mx-auto mt-[40px] rounded-lg' autoComplete='off'>
        <input className='w-[80%] bg-white p-3 text-semibold font-montserrat outline-none focus:shadow-lg rounded-tl-md rounded-bl-md' type="text" name='todoValue' required />
        <button className='w-[20%] bg-green-500 p-3 hover:opacity-[70%] text-white text-semibold rounded-tr-md rounded-br-md'>ADD</button>
    </form>
  )
}

export default TodoForm