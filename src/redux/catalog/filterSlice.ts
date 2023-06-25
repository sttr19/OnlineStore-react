import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import products from "../../data/puzzles.json";
import { PuzzleItem } from "../../data/model";

export const filterSlice = createSlice({
    name: "filter",
    initialState: { products, filteredProducts: products },
    reducers: {
        setCategory: (state, action) => {
            // console.log("slice", action);
            const filterByCategory = state.products.filter(
                (product) => product.theme === action.payload
            );
            return {
                ...state,
                filteredProducts:
                    action.payload.length > 0
                        ? filterByCategory
                        : [...state.products],
            };
        },
    },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
