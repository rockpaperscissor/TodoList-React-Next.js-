"use client"
import React, { useState } from 'react'

const page = () => {
  const [title , settitle] = useState("")
  const [desc , setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
  setmaintask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(maintask)


  }
  const deleteHandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }
let renderTask = <h2>No task available</h2>

if(maintask.length>0){
  renderTask = maintask.map((t,i) => {
    return (
      <li key={i} className='flex items-center justify-between mb-5'>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button
      onClick={()=>{
        deleteHandler(i)
      }}
      
      className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    )
  })
}

  return (
    <>
    <h1 className='bg-indigo-500  text-black p-5 text-8xl font-extrabold text-center'>WorK woRk wOrk!</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-indigo-800 border-2 my-8 px-4 py-6 m-20'  placeholder='enter title here'
       value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }} />
      <input type="text" className='text-2xl border-indigo-800 border-2 my-8 px-4 py-6 m-20'  
      placeholder='enter description here'  
      value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }} /> 
      <button className=' bg-black text-white m-20 py-3 px-4 text-2xl font-bold rounded'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      {renderTask}

    </div>
     
    </>
  )
}

export default page
