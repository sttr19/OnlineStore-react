import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import products from '../../data/puzzles.json'
import { RootState } from '../store';




export const catalogSlice=createSlice ({
	name:'puzzle',
	initialState:products,
	reducers:{
		
		  },
	}
);


export const selectGoods=(state:RootState)=>state.puzzle;
export default catalogSlice.reducer;