import { configureStore } from "@reduxjs/toolkit";
import filter from "./catalog/filterSlice";

export const store = configureStore({
    reducer: {
        filter,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
