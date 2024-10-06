import React, { Children } from 'react'

const Modal = ({children,openModal,setOpenMadal}) => {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setOpenMadal == (false):setOpenMadal(true)} id='wrapper' className={`fixed ${openModal ? "scale-100":"scale-0"} inset-0 backdrop-blur`}>
        <div className='w-[500px] absolute  mx-auto  mt-10 left-0 right-0 p-5 rounded-md bg-white'>
            {children}
        </div>
    </div>
  )
}

export default Modal