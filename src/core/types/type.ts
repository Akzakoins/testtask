import {Author, Data} from './interface';

export type CommentsState = {
  authors?: Author[];
  comments?: Data[];
  page: number;
  totalLikes: number;
  totalPages?: number;
  loading: {
    authors: boolean;
    comments: boolean;
  };
  error: boolean;
};

export type CommentsProps = {
  data?: Data[] | Data;
};

export type CommentProps = Omit<Data, 'id' | 'parent'>;

export type AuthorProps = Omit<CommentProps, 'text'>;

export type LikesProps = Pick<Data, 'likes'>;

export type CreatedProps = Pick<Data, 'created'>;
