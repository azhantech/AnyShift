import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api, {get, post} from '../../Api';
import {endpoints} from '../../Api/configs';
import {hideLoader, showLoader} from '../LoaderSlice';
import {showMessage} from 'react-native-flash-message';

export const ApplyFOrJob = createAsyncThunk(
  'user/jobapply',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      const response = await Api.post(endpoints.jobs.applied, data, false);
      dispatch(hideLoader());
      return Promise.resolve(response);
    } catch (error) {
      dispatch(hideLoader());
      // setTimeout(() => {
      //   showMessage({
      //     message: error,
      //     type: 'danger',
      //   });
      // }, 500);
      throw new Error(error);
    }
  },
);

//getJobsAction
export const getJobs = createAsyncThunk(
  'user/jobapply',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      const response = await post(endpoints.jobs.jobs, data, false);
      dispatch(hideLoader());
      return Promise.resolve(response?.data);
    } catch (error) {
      dispatch(hideLoader());
      // setTimeout(() => {
      //   showMessage({
      //     message: error,
      //     type: 'danger',
      //   });
      // }, 500);
      throw new Error(error);
    }
  },
);

export const getJobsDetails = async id => {
  try {
    // dispatch(showLoader());

    const response = await get(endpoints.jobs.jobs + `/${id}`, false);
    // dispatch({
    //   type: types.PROFILE_DETAILS,
    //   payload: response,
    // });
    // console.log('Response from get jobsDetail Action ==>', response);
    // dispatch(hideLoader());
    return response;
  } catch (e) {
    dispatch(hideLoader());

    return Promise.reject(e);
  }
};
