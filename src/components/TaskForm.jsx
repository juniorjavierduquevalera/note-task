import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const navigate = useNavigate()
  const params= useParams()
  const tasks = useSelector(state => state.tasks)
  const [task, setTask] = useState( {
    title:"",
    description:"",
    complete: "false"
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    setTask( {
      ...task, [e.target.name]: e.target.value,
    })
    // console.log(e.target.name, e.target.value)
  }
  const handleSubmit= (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(editTask(task))
    }
    else {
      dispatch(addTask({
        ...task, 
        id: uuidv4(),
      }
      ));
      // console.log(task)
    }
    navigate('/')
  }
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
      // console.log(setTask)
    }
  }, [params.id, tasks])
  return (
    <div className='border-4 bg-slate-200 border-accent rounded-lg w-full m-8 p-6 drop-shadow-md'>
      <form className='flex flex-col gap-4 p-6 bg-primary rounded-lg drop-shadow-md' onSubmit={handleSubmit}>
        <div className='w-4 h-4 rounded-full bg-warning drop-shadow-md mx-auto'></div>
        <input
           className='h-8 bg-teal-100 rounded-lg p-2 text-gray-600 font-semibold'
           name="title"
           type="text"
           value={task.title}
           onChange={handleChange}>
        </input>
        <textarea
           className='h-36 bg-teal-100 rounded-lg p-2 text-gray-600'
           name="description"
           value={task.description}
           onChange={handleChange}>
        </textarea>
        <button className=' text-gray-600'>save</button>
      </form>
    </div>
  )
}
export default TaskForm
