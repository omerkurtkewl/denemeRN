import {Dispatch} from '@reduxjs/toolkit';
import {LOGOUT_USER, UPDATE_USER} from './types';
import * as RootNavigation from '../../routes/utils';

export const updateUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_USER,
      payload: {
        user: {id: 1, name: 'omer'},
      },
    });
    console.log('ok2');

    RootNavigation.navigate('Home');
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
    console.log('logout');

    RootNavigation.navigate('Auth');
  };
};
