import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import ImageEditor from './pages/ImageEditor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImageEditor />
  </React.StrictMode>,
);
