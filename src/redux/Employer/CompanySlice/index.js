import { createAsyncThunk } from '@reduxjs/toolkit';
import {get} from '../../../Api';
import {employersEndpoints} from '../../../Api/configs';
import {hideLoader, showLoader} from '../../LoaderSlice';

export const getCompanies = createAsyncThunk(
  'user/Companies',
  async (_, {dispatch}) => {
    dispatch(showLoader());
    try {
      const response = await get(employersEndpoints.companies.company);

      dispatch(hideLoader());
      return Promise.resolve(response?.data);
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);
