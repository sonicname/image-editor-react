import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const ImageEditor = lazy(() => import('./pages/ImageEditor'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <StrictMode>
      <Suspense
        fallback={
          <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'>
            <div className='w-20 h-20 block rounded-full border-2 border-t-transparent animate-spin' />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ImageEditor />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
    <ToastContainer />
  </>,
);
