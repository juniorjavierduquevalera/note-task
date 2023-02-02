import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: storage,
}
const reducer = combineReducers({
  tasks : taskReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:[thunk]
})



