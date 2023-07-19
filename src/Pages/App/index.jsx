import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import SignIn from '../SignIn'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import { ShoppingCartProvider } from '../../Context'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/myorders/:id', element: <MyOrder /> },
    { path: '/myorder', element: <MyOrder /> },
    { path: '/myorders', element: <MyOrders /> },
    { path: '/myorders/last', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
