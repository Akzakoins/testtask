import {useAppSelector} from 'hooks';
import {selectComments} from 'store/selectors';
import {ReactComponent as Heart} from 'assets/svg/heart.svg';
import styles from './statistics.module.scss';

export const Statistics = () => {
  const {comments, totalLikes} = useAppSelector(selectComments);

  return (
    <div className={styles.wrapper}>
      <p className={styles.comments}>{comments?.length ?? 0} comments</p>
      <span className={styles.likes}>
        <Heart className="heart_svg" />
        {totalLikes}
      </span>
      <hr className={styles.underline} />
    </div>
  );
};
