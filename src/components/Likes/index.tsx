import {FC, useState} from 'react';
import {ReactComponent as Heart} from 'assets/svg/heart.svg';
import {useAppDispatch} from 'hooks';
import {updateLikes} from 'store/reducers';
import {LikesProps} from 'types';
import styles from './likes.module.scss';

export const Likes: FC<LikesProps> = ({likes}) => {
  const [isActive, setIsActive] = useState(false);
  const [like, setLike] = useState(likes);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setLike((prevState) => prevState + (isActive ? -1 : 1));
    dispatch(updateLikes(isActive));
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick}>
        <Heart className={`heart_svg ${isActive && 'heart_active'}`} />
      </button>
      {like}
    </div>
  );
};
