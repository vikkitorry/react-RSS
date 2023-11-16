import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={setupStore()}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
