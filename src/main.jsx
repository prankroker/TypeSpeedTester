import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TypingArea from './TypingArea.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <TypingArea />
      </div>
  </StrictMode>,
)
