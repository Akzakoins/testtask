import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommentsState} from 'types';
import {getAuthors, getComments} from 'store/api';

const initialState: CommentsState = {
  totalLikes: 0,
  page: 1,
  loading: {
    authors: true,
    comments: true,
  },
  error: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    updateLikes: (state, {payload}: PayloadAction<boolean>) => {
      state.totalLikes += payload ? -1 : 1;
    },
    changePage: (state, {payload}: PayloadAction<number>) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthors.fulfilled, (state, {payload}) => {
      state.authors = payload;
      state.loading.authors = false;
    });
    builder.addCase(getAuthors.rejected, (state) => {
      state.error = true;
      state.loading.authors = false;
    });
    builder.addCase(getComments.pending, (state) => {
      state.loading.comments = true;
      if (state.error) state.error = false;
    });
    builder.addCase(
      getComments.fulfilled,
      (state, {payload: {data, pagination}}) => {
        state.comments = state.comments?.concat(data) ?? data;
        state.totalLikes += data.reduce(
          (likes, comment) => likes + comment.likes,
          0,
        );

        if (state.error) state.error = false;

        if (!state.totalPages) state.totalPages = pagination.total_pages;

        state.loading.comments = false;
      },
    );
    builder.addCase(getComments.rejected, (state) => {
      state.error = true;
      state.loading.comments = false;
    });
  },
});

export const {updateLikes, changePage} = commentsSlice.actions;
export const comments = commentsSlice.reducer;
