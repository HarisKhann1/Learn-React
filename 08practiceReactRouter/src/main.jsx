import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import { GithubAPI, gihubInfoLoader } from './components/API/GithubAPI.jsx'
import Users from './components/Users/Users.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route loader={gihubInfoLoader} path='contact' element={<GithubAPI />} />
      <Route path='github/:userId' element={<Users />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
