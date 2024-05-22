import {FC, useCallback} from 'react';
import {CommentsProps} from 'types';
import {useAppSelector} from 'hooks';
import {selectComments} from 'store/selectors';
import {Comment} from 'components';
import styles from './comments.module.scss';

export const Comments: FC<CommentsProps> = ({data}) => {
  const {comments} = useAppSelector(selectComments);

  const findParent = useCallback(
    (id: number) => comments?.find(({parent}) => parent === id),
    [comments],
  );

  if (!data) return null;

  if (Array.isArray(data)) {
    return (
      <ul className={`${styles.table} ${styles.flex_ul}`}>
        {data.map(
          ({parent, id, ...other}) =>
            !parent && (
              <Comment key={id} {...other}>
                <Comments data={findParent(id)} />
              </Comment>
            ),
        )}
      </ul>
    );
  }

  const {id, parent, ...other} = data;

  return (
    <ul className={styles.flex_ul}>
      <Comment {...other}>
        <Comments data={findParent(id)} />
      </Comment>
    </ul>
  );
};
