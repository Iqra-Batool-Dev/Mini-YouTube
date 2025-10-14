import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/global.css'
import App from '@/App.jsx'
import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'
import Login from '@/pages/Login.jsx'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'
import Signup from './pages/Signup'
import { Failure } from './components'
import Liked from './pages/Liked'
import Notes from './pages/Notes'
import Bookmark from "./pages/Bookmark"
import Home from './pages/Home'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='failure' element= {<Failure/>}/>
      <Route path='/liked' element= {<ProtectedRoute><Liked/></ProtectedRoute>}/>
      <Route path='/notes' element= {<Notes/>}/>
      <Route path='/bookmarks' element= {<Bookmark/>}/>
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
