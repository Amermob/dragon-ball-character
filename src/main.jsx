import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DragonBall from './DragonBall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DragonBall />
  </StrictMode>,
)
