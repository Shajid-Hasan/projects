import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Components/Home/Home.jsx'
import AllProducts from './Components/All Products/AllProducts.jsx'
import MyProducts from './Components/My products/MyProducts.jsx'
import SignIn from './Pages/Sign In/SignIn.jsx'
import SignUp from './Pages/Sign Up/SignUp.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Context/AuthProvider.jsx'
import ProductDetails from './Components/Product Details/ProductDetails.jsx'
import MyBids from './Components/My Bids/MyBids.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/allproducts',
        Component: AllProducts
      },
      {
        path: '/myproducts',
        Component: MyProducts
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path:'/productDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails
      },
      {
        path: '/mybids',
        Component: MyBids
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
