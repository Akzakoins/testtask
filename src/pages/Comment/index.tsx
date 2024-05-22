import {FC, PropsWithChildren} from 'react';
import {CommentProps} from 'core/types';
import {Author} from 'components';
import styles from './comment.module.scss';

export const Comment: FC<PropsWithChildren<CommentProps>> = ({
  children,
  text,
  ...rest
}) => (
  <li className={styles.wrapper}>
    <Author {...rest} />
    <h4 className={styles.text}>{text}</h4>
    {children}
  </li>
);
