import {createAsyncThunk} from '@reduxjs/toolkit';
import getAuthorsRequest from 'api/authors/getAuthorsRequest';
import {Author} from 'core/types';

export const getAuthors = createAsyncThunk('comments/getAuthors', async () => {
  const authors: Author[] = await getAuthorsRequest();
  return authors;
});
