import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout></Layout>,
//     children:[{
//       path:'',
//       element:<Home></Home>
//     },
//     {
//       path:"about",
//       element:<About></About>
//     },
//   {
//     path:"contact",
//     element:<Contact></Contact>
//   }]
//   }

// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
