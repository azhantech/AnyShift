import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api, {get, post} from '../../Api';
import {endpoints} from '../../Api/configs';
import {hideLoader, showLoader} from '../LoaderSlice';
import {showMessage} from 'react-native-flash-message';

export const getJobsApplication = createAsyncThunk(
  'user/jobapply',
  async (data, {dispatch}) => {
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
// export const getJobsApplication = async data => {
//   try {
//     // dispatch(showLoader());

//     const response = await post(
//       endpoints.application.jobApplication,
//       data,
//       false,
//     );
//     // dispatch({
//     //   type: types.PROFILE_DETAILS,
//     //   payload: response,
//     // });
//     // dispatch(hideLoader());

//     return response;
//   } catch (e) {
//     // dispatch(hideLoader());

//     return Promise.reject(e);
//   }
// };
export const JobApplicationDetail = async id => {
  try {
    // dispatch(showLoader());

    const response = await get(
      endpoints.application.jobApplication + `/${id}`,
      false,
    );
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
