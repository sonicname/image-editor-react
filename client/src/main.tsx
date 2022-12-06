import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import ImageEditor from './pages/ImageEditor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageEditor />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
    <ToastContainer />
  </>,
);
