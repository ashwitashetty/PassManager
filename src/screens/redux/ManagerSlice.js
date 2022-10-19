import { createSlice } from "@reduxjs/toolkit";

const initialState=[ {
    src: require('/Volumes/Development/PassManager/src/assets/images/facebook.png'),
    url: 'wwww.facebook.com',
    sitename: 'Facebook',
    folder:"Social Media",
    username:"Ashwitha shetty",
    password:"123456789",
    notes:" my password",
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/youTube.png'),
    url: 'www.youtube.com/ssmraok',
    sitename: 'YouTube',
    folder:"Social Media",
    username:"Ashwitha shetty",
    password:"2345678901",
    notes:" my password",
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/Twitter.png'),
    url: 'wwww.Twitter.com',
    sitename: 'Twitter',
    folder:"Social Media",
    username:"Ashwitha shetty",
    password:"6789054321",
    notes:" my password",
  },
  {
    src: require('/Volumes/Development/PassManager/src/assets/images/Instagram.png'),
    url: 'wwww.Instagram.com',
    sitename: 'Instagram',
    folder:"Social Media",
    username:"Ashwitha shetty",
    password:"0987654321",
    notes:" my password",
  },];

export const ManagerSlice =createSlice({
    name:"password",
    initialState:{
        value:initialState,
    },
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload)
        },
        // passEdit:(state,action)=>{
        //         state.value.map(password => {
        //           if (password.id === action.payload.id) {
        //             password.task = action.payload.task;
        //           }
        //         });
        //       },
        }
    
})

export const {add} =
  ManagerSlice.actions;

export default ManagerSlice.reducer;