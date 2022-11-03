import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import ManagerSlice from "../redux/ManagerSlice";
import userIdReducer from "../redux/userIdSlice"
import userCountReducer from "./userCountSlice";
import userStateReducer from "./userStateSlice"

const persistConfig={
    key:"root",
    version:1,
    storage:AsyncStorage
};

const reducer = combineReducers(
    {
        password:ManagerSlice,
        userId: userIdReducer,
        userCount: userCountReducer,
        userState : userStateReducer,
      
      
      
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