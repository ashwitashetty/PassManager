import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  { id:1,
    src: require('/Volumes/Development/PassManager/src/assets/images/facebook.png'),
    url: 'wwww.facebook.com',
    sitename: 'Facebook',
    folder: 'Social Media',
    username: 'Ashwitha shetty',
    password: '123456789',
    notes: 'facebook password',
  },
  {
    id:2,
    src: require('/Volumes/Development/PassManager/src/assets/images/youTube.png'),
    url: 'www.youtube.com/ssmraok',
    sitename: 'YouTube',
    folder: 'Social Media',
    username: 'Ashwitha shetty',
    password: '2345678901',
    notes: ' youtube details',
  },
  {
    id:3,
    src: require('/Volumes/Development/PassManager/src/assets/images/Twitter.png'),
    url: 'wwww.Twitter.com',
    sitename: 'Twitter',
    folder: 'Social Media',
    username: 'Ashwitha shetty',
    password: '6789054321',
    notes: ' twitter account',
  },
  {
    id:4,
    src: require('/Volumes/Development/PassManager/src/assets/images/Instagram.png'),
    url: 'wwww.Instagram.com',
    sitename: 'Instagram',
    folder: 'Social Media',
    username: 'Ashwitha shetty',
    password: '0987654321',
    notes: ' Instagram details',
  },
];

export const ManagerSlice = createSlice({
  name: 'password',
  initialState: {
    value: initialState,
    filterValue: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      state.filterValue.push(action.payload);
    },
    edit: (state, action) => {
      state.value.map(password => {
        if (password.id === action.payload.id) {
          password.sitename = action.payload.sitename;
          password.url = action.payload.url;
          password.password = action.payload.password;
          password.folder = action.payload.folder;
          password.username = action.payload.username;
          password.notes = action.payload.notes;
        }
      });
    },
    filter: (state, action) => {
      state.value = state.filterValue.filter(site =>
        site.sitename.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    deleteSite :(state,action) => {
      state.value = state.value.filter(value => value.id !== action.payload.id);
    }
  },
});

export const {add, edit, filter,deleteSite} = ManagerSlice.actions;

export default ManagerSlice.reducer;
