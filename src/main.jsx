import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/poppins';
import './index.css'
import ProductContextProvider from './ContextApi/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <StrictMode>

      <App />


    </StrictMode>,
  </ProductContextProvider>
)
