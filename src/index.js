import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store';
import { ErrorBoundary } from './components/common';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
