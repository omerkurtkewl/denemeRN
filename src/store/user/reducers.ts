import {createReducer} from '@reduxjs/toolkit';
import {LOGOUT_USER, UPDATE_USER, User} from './types';

interface UserState {
  user: User | null;
}

const initialState = {
  user: null,
} as UserState;

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(UPDATE_USER, (state, {payload}: any) => {
      state.user = payload.user;
    })
    .addCase(LOGOUT_USER, state => {
      state.user = null;
    });
});
