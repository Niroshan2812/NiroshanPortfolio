import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DarkmodeToggle from './envirement/DarkmodeToggle.tsx'
import App from './App.tsx'
import NavBarImpl from './envirement/NavBarImpl.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App />
</StrictMode>
)
