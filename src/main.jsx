import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './ErrorBoudary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <ErrorBoundary>
     <App />
   </ErrorBoundary>
)
