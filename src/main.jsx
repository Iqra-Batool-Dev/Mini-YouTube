import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/global.css'
import App from '@/App.jsx'
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './components/index'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/login' element={<Login/>}/>
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
