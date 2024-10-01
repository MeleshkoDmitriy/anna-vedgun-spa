import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Paths } from './constants/Paths';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { Provider } from 'react-redux';
import store from './store/store';
import { OfferPage } from './pages/OfferPage/OfferPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <HomePage />,
  },

  {
    path: Paths.OFFER,
    element: <OfferPage />,
  },
  {
    path: Paths.BLOG,
    element: <BlogPage />,
  },
  {
    path: Paths.NOTFOUND,
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
