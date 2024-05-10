import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Lenguajes } from './datos/Lenguajes'

 
//importamos react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { VistaLenguaje } from './vistas/VistaLenguaje.jsx'

const router = [
  {
    path:"/",
    element: <App />,

  }
]

Lenguajes.forEach((len)=>{
  router.push({
    path:len.nombre,
    element: <VistaLenguaje len = {len}/>
  })
})

const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
