import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/puzzles.json";

export const filterSlice = createSlice({
    name: "filter",
    initialState: { products, filteredProducts: products, value: "" },
    reducers: {
        setCategory: (state, action) => {
            console.log("slice", action.payload);
            const filterByCategory = state.products.filter(
                (product) => product.theme === action.payload
            );
            return {
                ...state,
                filteredProducts:
                    action.payload.length > 0
                        ? filterByCategory
                        : [...state.products],
                value: action.payload,
            };
        },
    },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
