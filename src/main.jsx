import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Body1 from './body1.jsx'
import Body2 from './body2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
      <Body1 />
      <Body2 />
  </React.StrictMode>
)