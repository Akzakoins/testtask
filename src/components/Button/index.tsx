import {useAppDispatch, useAppSelector} from 'hooks';
import {selectComments} from 'store/selectors';
import {BUTTON_TITLE} from '../../constants';
import {changePage} from 'store/reducers';
import {getComments} from 'store/api';
import styles from './button.module.scss';

export const Button = () => {
  const {page, error} = useAppSelector(selectComments);
  const dispatch = useAppDispatch();

  const handleChangePage = () => {
    if (error) {
      dispatch(getComments(page));
      return;
    }

    dispatch(changePage(page + 1));
  };

  return (
    <button onClick={handleChangePage} className={styles.btn}>
      {error ? BUTTON_TITLE.error : BUTTON_TITLE.load}
    </button>
  );
};
