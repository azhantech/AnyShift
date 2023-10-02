import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api, { get, post } from '../../Api';
import { endpoints } from '../../Api/configs';
import { hideLoader, showLoader } from '../LoaderSlice';
import { showMessage } from 'react-native-flash-message';
import { showToast } from '../../Api/HelperFunction';

//Signup Employee Thunk
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
    { dispatch },
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
        showToast(error)
      }, 500);
      throw new Error(error);
    }
  },
);

// LOGIN USER THUNK
export const LoginUser = createAsyncThunk(
  'user/loginuser',
  async ({ email, password }, { dispatch }) => {
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
        showToast(error)
      }, 500);
      throw new Error(error);
    }
  },
);

// FORGOT PASSWORD THUNK
export const SendForgotPasswordEmail = createAsyncThunk(
  'user/forgotpassword',
  async ({ email }, { dispatch }) => {
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
          // showToast(getMessage(res));
          // showMessage({
          //   message: res.message,
          //   type: 'success',
          // });
          showToast(res.message)

          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());

          setTimeout(() => {
            // showToast(getMessage(e));
            // showMessage({
            //   message: e,
            //   type: 'danger',
            // });
            showToast(e)
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

// VERIFY OTP CODE THUNK
export const VerifyCode = createAsyncThunk(
  'user/verifycode',
  async ({ email, code }, { dispatch }) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(`${endpoints.auth.verifyCode}/${email}/${code}`)
        .then(res => {
          response = res;
          showToast(getMessage(res?.message));
          // showMessage({
          //   message: res.message,
          //   type: 'success',
          // });

          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());

          setTimeout(() => {
            showToast(e);
            // showMessage({
            //   message: e,
            //   type: 'danger',
            // });
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
  async ({ email, code, password }, { dispatch }) => {
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
          // showMessage({
          //   message: res?.message,
          //   type: 'success',
          // });
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());

          setTimeout(() => {
            showToast(e);
            // showMessage({
            //   message: e,
            //   type: 'danger',
            // });
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);


// export const getJobs = createAsyncThunk('user/getJobbs', async dispatch => {
//   dispatch(showLoader());
//   try {
//     const response = await Api.get(endpoints.jobs.jobs);
//     console.log('Response from Getjobs Actions ======>', response);
//     dispatch(hideLoader());

//     return Promise.resolve(response);
//   } catch (error) {
//     console.log('Error from getJobs ===========>', error);
//     dispatch(hideLoader());

//     throw new Error(error);
//   }
// });

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, { payload }) => {
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
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
// export const { setData } = dataSlice.actions;
// export default dataSlice.reducer;
