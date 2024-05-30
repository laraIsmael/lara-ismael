import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ScrollTop from "./ScrollTop";
import { BrowserRouter } from 'react-router-dom'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
