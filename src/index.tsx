import React from 'react';
import ReactDom from 'react-dom/client';

import App from '../App/App';
import '../src/styles/main.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDom.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
