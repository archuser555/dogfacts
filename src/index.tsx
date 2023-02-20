import React from 'react';
import ReactDOM from 'react-dom/client';
import Translate from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Translate />
  </React.StrictMode>
);