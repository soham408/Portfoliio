import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import Techskills from './components/Techskills/Techskills.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

import {AnimatePresence} from 'framer-motion'

const location = useLocation()

const router = createBrowserRouter(
  createRoutesFromElements(
    <AnimatePresence>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='techskills' element={<Techskills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
        />
        
      </Route>
      </AnimatePresence>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





