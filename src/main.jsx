import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthContextProvider from './provider/AuthContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthContextProvider>
    <RouterProvider router={router}/>
  </AuthContextProvider>
)
