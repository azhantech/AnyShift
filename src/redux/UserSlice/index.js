import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api, {get, post} from '../../Api';
import {endpoints} from '../../Api/configs';
import {hideLoader, showLoader} from '../LoaderSlice';
import {showToast} from '../../Api/HelperFunction';

export const SignUpEmployee = createAsyncThunk(
  'user/SignUpEmployee',
  async (
    {
      firstName,
      lastName,
      nickName,
      birthDate,
      address,
      phoneNumber,
      invitationCode,
      emailAddress,
      password,
    },
    {dispatch},
  ) => {
    dispatch(showLoader());
    try {
      const response = await Api.post(endpoints.auth.signup, {
        firstName,
        lastName,
        nickName,
        birthDate,
        address,
        phoneNumber,
        invitationCode,
        emailAddress,
        password,
      });
      dispatch(hideLoader());

      return Promise.resolve(response);

      // .catch(e => {

      //   throw new Error(e);
      // });

      // return response;
    } catch (error) {
      dispatch(hideLoader());
      setTimeout(() => {
        // showMessage({
        //   message: error,
        //   type: 'danger',
        // });
        showToast(error);
      }, 500);
      throw new Error(error);
    }
  },
);

export const LoginUser = createAsyncThunk(
  'user/loginuser',
  async ({email, password}, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response = await Api.post(endpoints.auth.login, {
        email,
        password,
      });
      dispatch(hideLoader());
      return Promise.resolve(response?.data);
    } catch (error) {
      dispatch(hideLoader());
      setTimeout(() => {
        // showMessage({
        //   message: error,
        //   type: 'danger',
        // });
        showToast(error);
      }, 500);
      throw new Error(error);
    }
  },
);

export const SendForgotPasswordEmail = createAsyncThunk(
  'user/forgotpassword',
  async ({email}, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(
        endpoints.auth.forgotPassword,
        {
          email,
        },
        false,
      )
        .then(res => {
          response = res;
          showToast(res.message);
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(e);
          }, 500);
          throw new Error(e);
        });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const VerifyCode = createAsyncThunk(
  'user/verifycode',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.verifyCode, data, false)
        .then(res => {
          response = res;
          showToast(res?.message);
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());

          setTimeout(() => {
            showToast(e);
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const ResetPassword = createAsyncThunk(
  'user/resetpassword',
  async ({email, code, password}, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(
        endpoints.auth.resetPassword,
        {
          email,
          newPassword: password,
          token: code,
        },
        false,
      )
        .then(res => {
          response = res;
          showToast(res?.message);
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(e);
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const contactUs = createAsyncThunk(
  'user/contactUs',
  async ({Name, EmailAddress, Subject, Message}, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response = await Api.post(endpoints.auth.contactUs, {
        Name,
        EmailAddress,
        Subject,
        Message,
      });
      dispatch(hideLoader());
      return Promise.resolve(response);
    } catch (error) {
      dispatch(hideLoader());
      setTimeout(() => {
        showToast(error);
      }, 500);
      throw new Error(error);
    }
  },
);

export const getProfileDetails = createAsyncThunk(
  'user/getProfileDetails',
  async (_, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response = await get(endpoints.profile.getProfile, false);
      dispatch(hideLoader());
      return Promise.resolve(response);
    } catch (error) {
      dispatch(hideLoader());
      // setTimeout(() => {
      //   showToast(error, 'danger');
      // }, 500);
      throw new Error(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    profile: (state, action) => {
      console.log(action.payload);
      state.profile = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, {payload}) => {
      state.user = payload;
      // state.loading = false;
    },
    [LoginUser.pending]: state => {
      // state.loading = true;
    },
    [LoginUser.rejected]: state => {
      // state.loading = 'failed';
      console.error('FAILED');
    },
    [getProfileDetails.fulfilled]: (state, {payload}) => {
      state.profile = payload;
      state.loading = false;
    },
    [getProfileDetails.pending]: state => {
      state.loading = true;
    },
    [getProfileDetails.rejected]: state => {
      state.loading = 'failed';
      console.error('FAILED');
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
// export const { setData } = dataSlice.actions;
// export default dataSlice.reducer;
