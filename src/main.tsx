import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { Paths } from './constants/Paths'

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <HomePage />,
  },
  {
    path: Paths.BLOG,
    element: <h1>BLOG</h1>,
  },
  {
    path: Paths.CONTACTS,
    element: <h1>Contact</h1>,
  },
  {
    path: Paths.NOTFOUND,
    element: <h1>404</h1>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
