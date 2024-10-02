import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import ErrorPage from '../error-page';
import Projects from './pages/Projects';
import Visualizations from './pages/Visualizations.jsx'
import DataSets from './pages/DataSets';
import Contact from './pages/Contact.jsx';
import Elements from  './pages/Elements';
import Canvas from './components/Canvas';
import TypeHype from './pages/TypeHype';
import Monopoly from './pages/Monopoly';
import Cube from './pages/Cube'
import Home from './pages/Home'
import App from './App'

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
        element: <Canvas />
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