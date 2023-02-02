import { createSlice } from "@reduxjs/toolkit";

const initialState= [
{
  id: "1",
  title: "Mi primera nota",
  description: "descripción de mi primera nota, todas las cosas que debo hacer!",
  completed: "false"
},
];
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      // console.log(state, action)
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      // console.log(taskFound)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer
