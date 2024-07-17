
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import "./Global.css"
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'

function App() {
  let routers = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'portfolio',element:<Portfolio/>},
    ]}
  ])

  return <RouterProvider router={routers}></RouterProvider>
}

export default App
