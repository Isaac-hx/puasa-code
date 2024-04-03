import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import ErrorPage from './Error-page.jsx'
import Menu from './POS/Components/menu/Menu.jsx'

const router = createBrowserRouter(
[
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'home',
        element:<h2>Ini adalah halaman home</h2>
      },
      {
        path:'menu',
        element:<Menu/>
      },
      {
        path:'history',
        element:<h2>Ini adalah halaman history</h2>
      },
      {
        path:'promo',
        element:<h2>Ini adalah halaman promo</h2>
      },
      {
        path:'wallet',
        element:<h2>Ini adalah halaman wallet</h2>
      },

    ]
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
