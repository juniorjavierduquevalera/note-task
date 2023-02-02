import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { deleteTask } from '../features/task/taskSlice'
import { Link } from "react-router-dom";
import { FiPaperclip, FiEdit3 } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

const TaskList = () => {
   const tasks = useSelector(state => state.tasks)
   const dispatch = useDispatch()
   const handleDelete = (id) => {
    dispatch(deleteTask(id))
   }
return (
    <div className='border-4 bg-slate-200 border-accent rounded-lg w-full m-8'>
       <header className='bg-secondary rounded-lg mx-6 mt-6 flex items-center h-full drop-shadow-md mb-6'>
          <div className="avatar">
            <div className="w-14 m-3 rounded-full ring ring-primary ring-offset-secondary ring-offset-2">
              <img src="https://random.imagecdn.app/100/100" />
            </div>
          </div>
          <div className='flex items-center'>
            <FiPaperclip className='text-white ml-3 mr-1 w-6 h-6'/>
            <h1 className='font-semibold text-white'>Notas: {tasks.length}</h1>
          </div>
      </header>
      <Link to="/create-task" className='flex justify-center gap-2 items-center text-gray-600 font-semibold'>
          <h2>Crear nota</h2>
          <FiEdit3 to="/create-task" />
      </Link>
      {tasks.map(tasks => (
      <div className='m-6 bg-primary rounded-lg px-6 pt-4 pb-6 text-gray-600 drop-shadow-md' key={tasks.id}>
        <div className='w-4 h-4 rounded-full bg-warning drop-shadow-md mx-auto'></div>
        <div className='my-2'>
          <h1 className='text-center font-semibold mb-2'>{tasks.title}</h1>
          <p className='bg-teal-100 rounded-lg p-2 h-full'>{tasks.description}</p>
        </div>
        <div className='flex justify-center gap-4 mt-6'>
          <button 
          onClick={() => handleDelete(tasks.id)}>
             <TiDelete className="w-6 h-6" />
          </button>
          <Link to={`/edit-task/${tasks.id}`}>Edit</Link>
          </div>
      </div>
    ))}
    </div>
  )
}
export default TaskList
