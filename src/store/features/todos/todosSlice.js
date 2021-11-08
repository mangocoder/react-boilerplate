import {
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit'

const todosAdapter = createEntityAdapter({
  selectCompleted: () => {}
})

const initialState = todosAdapter.getInitialState({
  loading: 'idle'
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoToggled: (state, action) => {
      const todoId = action.payload
      const todo = state.entities[todoId]
      todo.completed = !todo.completed
    },
    todoUpdated: todosAdapter.updateOne
  }
})

const todosSelectors = todosAdapter.getSelectors((state) => state.todos)

console.log(todosSelectors)
export const { todoAdded, todoToggled, todoUpdated } = todosSlice.actions

export default todosSlice.reducer
