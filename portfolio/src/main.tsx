import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DarkmodeToggle from './envirement/DarkmodeToggle.tsx'
import App from './App.tsx'
import NavBarImpl from './envirement/NavBarImpl.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="  bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4 ">
       
        <h1 className="text-xl font-bold">Niroshan</h1>
       <div className='flex p-2'> 
       <DarkmodeToggle />
       <NavBarImpl/>
       </div>
      </div>
      {/* Main Content */}
      <main className="w-full h-full min-h-screen container mx-auto p-2">
        <App />
      </main>
    </div>
  </StrictMode>,
)
