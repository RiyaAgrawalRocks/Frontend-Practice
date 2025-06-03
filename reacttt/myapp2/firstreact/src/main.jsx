import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MainContent(){
  return(
    <h1>React is great!</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    <MainContent/>
  </div>
)
