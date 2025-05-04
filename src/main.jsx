import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
import { MatchInfoProvider } from './context/MatchInfoContext.jsx'

createRoot(document.getElementById('root')).render(
 <MatchInfoProvider>
    <App />
    </MatchInfoProvider>
)
