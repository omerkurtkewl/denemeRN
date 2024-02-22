import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './user/reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
