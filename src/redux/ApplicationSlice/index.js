import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api, { get, post } from '../../Api';
import { endpoints } from '../../Api/configs';
import { hideLoader, showLoader } from '../LoaderSlice';

export const getJobsApplication = createAsyncThunk(
  'user/jobapply',
  async (data, { dispatch }) => {
    dispatch(showLoader());
    try {
      const response = await post(
        endpoints.application.jobApplication,
        data,
        false,
      );

      dispatch(hideLoader());
      return Promise.resolve(response?.data);
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);

export const JobApplicationDetail = createAsyncThunk(
  'user/jobdetails',
  async (id, { dispatch }) => {
    dispatch(showLoader());
    try {
      const response = await get(
        endpoints.application.jobApplication + `/${id}`,
        false,
      );

      dispatch(hideLoader());
      return Promise.resolve(response?.data);
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);

export const ReviewJobApplicationDetail = createAsyncThunk(
  'user/reviewjobdetails',
  async (data, { dispatch }) => {
    dispatch(showLoader());
    try {
      const response = await post(
        endpoints.application.reviewJobApplication, data,
        false,
      );

      dispatch(hideLoader());
      return Promise.resolve(response);
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);


// export const JobApplicationDetail = async id => {
//   try {
//     dispatch(showLoader());
//     const response = await get(
//       endpoints.application.jobApplication + `/${id}`,
//       false,
//     );
//     dispatch(hideLoader());
//     return Promise.resolve(response?.data?.jobApplication);
//   } catch (e) {
//     dispatch(hideLoader());
//     return Promise.reject(e);
//   }
// };
