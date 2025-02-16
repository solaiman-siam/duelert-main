import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainProvider from './providers/MainProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes.jsx'
import "react-big-calendar/lib/css/react-big-calendar.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router}/>
    </MainProvider>
  </StrictMode>,
)
