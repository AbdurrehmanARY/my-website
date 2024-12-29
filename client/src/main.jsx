import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import { Toaster } from './components/ui/toaster'
import { EventContextProvider } from './context/EventContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <EventContextProvider>
    <App />
    </EventContextProvider>
    <Toaster/>

    </AuthContextProvider>
  </StrictMode>,
)
