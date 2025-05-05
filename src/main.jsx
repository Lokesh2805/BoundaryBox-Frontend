import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import authReducer from './redux/authSlice.js'
import { MatchInfoProvider } from './context/MatchInfoContext.jsx'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
 <MatchInfoProvider>
    <App />
    </MatchInfoProvider>
    </Provider>
)
