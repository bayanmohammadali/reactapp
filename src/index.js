import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom"
import Home from './components/Home';
import Html from './components/Html';
import Css from './components/Css';
import JavaScript from './components/JavaScript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>
  },

  {
    path: "/html",
    element: <Html />,
    errorElement: <div>404</div>
  },

  {
    path: "/css",
    element: <Css />,
    errorElement: <div>404</div>
  },

  {
    path: "/javascript",
    element: <JavaScript />,
    errorElement: <div>404</div>
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
