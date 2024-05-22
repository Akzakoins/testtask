import {configureStore} from '@reduxjs/toolkit';
import {comments} from 'store/reducers';

export const store = configureStore({
  reducer: {
    comments,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
