import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/sass/main.scss"
import "./assets/sass/media.scss"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
