import { configureStore } from "@reduxjs/toolkit";

import passwordReducer from "../redux/ManagerSlice"


export const Store =configureStore({
    reducer:{
        password:passwordReducer,
    }
});