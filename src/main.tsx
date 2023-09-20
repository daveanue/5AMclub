import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminPortal from './container/adminPortal';
import ErrorPage from './container/ErrorPage';
import CommonProvider from './context/CommonProvider';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <CommonProvider>
      <App />
    </CommonProvider>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/admin",
    element:
    <CommonProvider>
      <AdminPortal />
    </CommonProvider>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
