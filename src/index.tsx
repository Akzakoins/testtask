import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import useMockAdapter from 'api/useMockAdapter';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {store} from 'store';

const root = createRoot(document.getElementById('root') as HTMLElement);

export const RootApp = () => {
  useMockAdapter();

  return <App />;
};

root.render(
  <StrictMode>
    <Provider store={store}>
      <RootApp />
    </Provider>
  </StrictMode>,
);
