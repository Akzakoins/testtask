import {useAppDispatch, useAppSelector} from 'hooks';
import {useEffect, useMemo} from 'react';
import {getAuthors, getComments} from 'store/api';
import {Button, Comments, Statistics} from 'components';
import {selectComments} from 'store/selectors';
import {ReactComponent as Preloader} from 'assets/svg/preloader.svg';
import {ERROR_MESSAGE} from './constants';

function App() {
  const {loading, page, comments, error, totalPages} =
    useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  const isLoading = Object.values(loading).some(Boolean);
  console.log(isLoading);

  useEffect(() => {
    dispatch(getComments(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  if (isLoading) return <Preloader />;

  return (
    <>
      {comments && (
        <>
          <Statistics />
          <Comments data={comments} />
        </>
      )}
      {error && <p>{ERROR_MESSAGE}</p>}
      {isLoading && <Preloader />}
      {totalPages && page < totalPages && <Button />}
    </>
  );
}

export default App;
