import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpeedTypingGame from './SpeedTypingGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <SpeedTypingGame />
      </div>
  </StrictMode>,
)
