import thunk from 'redux-thunk';
import {persistReducer, persistStore, createMigrate} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import migration, {storeVersion} from './migration';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import general from './general';
import LoaderSlice from './LoaderSlice';
import UserSlice from './UserSlice';
import AuthSlice from './Employer/AuthSlice';

export const persistConfig = {
  key: 'anyshift-storage-root',
  storage: AsyncStorage,
  version: storeVersion,
  debug: __DEV__,
  blacklist: ['general'],
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(
    {
      [storeVersion]: migration,
    },
    {debug: __DEV__},
  ),
};

const reducers = combineReducers({
  general: general,
  user: UserSlice,
  loader: LoaderSlice,
  auth: AuthSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat([thunk]);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
