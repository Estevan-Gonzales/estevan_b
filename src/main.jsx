import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import App from './App'
import ErrorPage from '../error-page';

import Projects from './pages/Projects';
import Elements from  './pages/projects/Elements';
import Halfs from './pages/projects/Halfs';
import TypeHype from './pages/projects/TypeHype';
import Monopoly from './pages/projects/Monopoly';
import Cube from './pages/projects/Cube';
import Dashboard from './pages/projects/Dashboard';
import Dice from './pages/projects/Dice';
import Clock from './pages/projects/Clock';
import PiClock from './pages/projects/PiClock';

import Spider from './pages/bugs/Spider.jsx'
import Dragonfly from './pages/bugs/Dragonfly.jsx'

import Visualizations from './pages/Visualizations.jsx'
import Contact from './pages/Contact.jsx';
import DataSets from './pages/DataSets';
import Bugs from './pages/Bugs.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      { 
        path: '/Home',
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
        path: '/Bugs',
        element: <Bugs />
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
      },
      {
        path: 'Projects/dashboard',
        element: <Dashboard />
      },
      {
        path: 'Projects/dice',
        element: <Dice />
      },
      {
        path: 'Projects/clock',
        element: <Clock />       
      },
      {
        path: 'Projects/piclock',
        element: <PiClock />
      },
      {
        path: 'Bugs/spider',
        element: <Spider />
      },
      {
        path: 'Bugs/dragonfly',
        element: <Dragonfly />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);