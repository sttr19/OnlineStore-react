import { configureStore } from '@reduxjs/toolkit'
import puzzle from './catalog/catalogSlice'


export const store = configureStore({
	reducer: {
		puzzle,
	},
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch