import {createAsyncThunk} from '@reduxjs/toolkit';
import {IPagination} from 'core/types';
import getCommentsRequest from 'api/comments/getCommentsRequest';

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (page: number) => {
    const comments: IPagination = await getCommentsRequest(page);
    return comments;
  },
);
