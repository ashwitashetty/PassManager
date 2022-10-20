import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import ManagerSlice from "../redux/ManagerSlice";


const persistConfig={
    key:"root",
    version:1,
    storage:AsyncStorage
};

const reducer = combineReducers(
    {
        password:ManagerSlice
    } 
);

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistRed,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

// export const Store =configureStore({
//     reducer:{
//         password:passwordReducer,
//     }
// });