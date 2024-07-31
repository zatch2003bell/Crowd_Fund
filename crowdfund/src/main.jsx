import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/about/About.jsx'
import Home from './pages/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './pages/project/Project.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/projects/:id",
    element: <Project/>
  }]
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
