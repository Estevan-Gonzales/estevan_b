import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home'
import App from './App'
import ErrorPage from '../error-page';

import Projects from './pages/Projects';
import Elements from  './pages/projects/Elements';
import Halfs from './pages/projects/Halfs';
import TypeHype from './pages/projects/TypeHype';
import Monopoly from './pages/projects/Monopoly';
import Cube from './pages/projects/Cube'

import Visualizations from './pages/Visualizations.jsx'
import Contact from './pages/Contact.jsx';
import DataSets from './pages/DataSets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Visualizations',
        element: <Visualizations />,
      },
      {
        path: '/DataSets',
        element: <DataSets />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Projects/elements',
        element: <Elements />
      },
      {
        path: '/Projects/halfs',
        element: <Halfs />
      },
      {
        path: '/Projects/typehype',
        element: <TypeHype />
      },
      {
        path: 'Projects/monopoly',
        element: <Monopoly />
      },
      {
        path: 'Projects/cube',
        element: <Cube />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);