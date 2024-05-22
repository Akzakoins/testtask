import {FC} from 'react';
import {AuthorProps} from 'core/types';
import {useAppSelector} from 'core/hooks';
import {selectComments} from 'store/selectors';
import {Likes} from 'components';
import {getDate} from 'core/utils';
import styles from './author.module.scss';

export const Author: FC<AuthorProps> = ({created, author, likes}) => {
  const {authors} = useAppSelector(selectComments);
  const commentator = authors?.find(({id}) => id === author);

  if (!commentator) return null;

  const {avatar, name} = commentator;
  const data = getDate(created);

  return (
    <figure className={styles.wrapper}>
      <img src={avatar} alt={name} className={styles.image} />
      <figcaption className={styles.figcaption}>
        <div>
          <h3 title={name} className={styles.name}>
            {name}
          </h3>
          <h4 title={data} className={styles.created}>
            {data}
          </h4>
        </div>
        <Likes likes={likes} />
      </figcaption>
    </figure>
  );
};
