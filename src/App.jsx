import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <div className='App'>
      <Routes>
        {routes.map((route) => {
          const Page = route.component
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <MainLayout>
                  <Page />
                </MainLayout>
              }
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
