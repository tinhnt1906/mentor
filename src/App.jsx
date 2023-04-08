import { routes } from './routes/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/index.js'
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {Object.values(routes).map((route) => {
            const Page = route.component
            return (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={<Page/>
                }
              />
            )
          })}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
