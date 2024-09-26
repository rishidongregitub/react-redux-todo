import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

console.log("Provider Store:", store.getState()); // Ensure the store is correct

createRoot(document.getElementById('root')).render(
  <Provider store={store}>   {/* Fixing the typo 'stoe' to 'store' */}
    <App />
  </Provider>
)
