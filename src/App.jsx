import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css'
import  TaskList  from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <div className="App w-96 h-full flex justify-center items-start">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
            </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
