import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api, { get, post } from '../../Api';
import { endpoints } from '../../Api/configs';
import { hideLoader, showLoader } from '../LoaderSlice';
import { showMessage } from 'react-native-flash-message';

export const ApplyFOrJob = createAsyncThunk(
  'user/jobapply',
  async (data, { dispatch }) => {
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
  async (data, { dispatch }) => {
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

export const getJobsDetails = createAsyncThunk(
  'user/jobsDetails',
  async (id, { dispatch }) => {
    dispatch(showLoader());
    try {
      const response = await get(endpoints.jobs.jobs + `/${id}`, false);
      dispatch(hideLoader());
      return Promise.resolve(response);
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);
