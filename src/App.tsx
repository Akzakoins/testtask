import {useAppDispatch, useAppSelector} from 'core/hooks';
import {useEffect, useMemo} from 'react';
import {getAuthors, getComments} from 'store/api';
import {Button, Comments, Statistics} from 'components';
import {selectComments} from 'store/selectors';
import {ReactComponent as Preloader} from 'assets/svg/preloader.svg';
import {ERROR_MESSAGE} from 'core/constants';

function App() {
  const {loading, page, comments, error, totalPages} =
    useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  const isLoading = useMemo(() => Object.values(loading), [loading]);

  useEffect(() => {
    dispatch(getComments(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  if (isLoading.every(Boolean)) return <Preloader />;

  return (
    <>
      {comments && (
        <>
          <Statistics />
          <Comments data={comments} />
        </>
      )}
      {error && <p>{ERROR_MESSAGE}</p>}
      {isLoading.includes(true) && <Preloader />}
      {totalPages && page < totalPages && <Button />}
    </>
  );
}

export default App;
