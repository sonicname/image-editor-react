import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Homepage = lazy(() => import('./pages/Homepage'));
const ImageEditor = lazy(() => import('./pages/ImageEditor'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <StrictMode>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ImageEditor />} />
            <Route path='/editor' element={<ImageEditor />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
    <ToastContainer />
  </>,
);
