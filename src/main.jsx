import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import './App.css'
import ErrorPage from '../error-page';
import Projects from './pages/Projects';
import Monopoly from './pages/Monopoly';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Projects',
    element: <Projects />,
  },
  {
    path: 'Projects/monopoly',
    element: <Monopoly />
  }
],
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);