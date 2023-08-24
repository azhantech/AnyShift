import {createSlice} from '@reduxjs/toolkit';
export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: false,
    softLoader: false,
    initialRoute: 'Home',
  },
  reducers: {
    showLoader: (state, action) => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
    showSoftLoader: (state, action) => {
      state.softLoader = true;
    },
    hideSoftLoader: state => {
      state.softLoader = false;
    },
    setInitialRouteToLogin: (state) =>{
      state.initialRoute = 'SignIn'
    }
  },
});

export const {showLoader, hideLoader, hideSoftLoader, showSoftLoader, setInitialRouteToLogin} =
  loaderSlice.actions;

export const selectLoader = state => state.loader.loader;
export const selectSoftLoader = state => state.loader.softLoader;
export const selectInitialRoute = state => state.loader.initialRoute;

export default loaderSlice.reducer;
