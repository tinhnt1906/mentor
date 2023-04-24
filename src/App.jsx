import { routes } from './routes/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { syncData } from './features/cartSlice.js'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems'))
      if (!cartItems) {
        return
      }

      dispatch(
        syncData({
          cartItems: cartItems
        })
      )
    } catch (error) {
      console.log(error)
      //noop
    }
  }, [])

  return (
    <BrowserRouter>
      <MainLayout>
        <ToastContainer />

        <Routes>
          {Object.values(routes).map((route) => {
            const Page = route.component
            return <Route exact key={route.path} path={route.path} element={<Page />} />
          })}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
