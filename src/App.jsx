import { routes } from './routes'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {Object.values(routes).map((route) => {
            const Page = route.component
            return (
              <Route
                exact
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
      </BrowserRouter>
    </div>
  )
}

export default App
