import { routes } from './routes'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { ToastContainer } from 'react-toastify'

function App() {
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
