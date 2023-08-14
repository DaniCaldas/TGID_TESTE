import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from '../styleGlobal.js'
import { ControlProvider } from './Context/ControlProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlProvider>
      <GlobalStyle/>
      <App />
    </ControlProvider>
  </React.StrictMode>
)
