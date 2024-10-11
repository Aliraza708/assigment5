import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/poppins';
import './index.css'
import ProductContextProvider from './ContextApi/ProductContext.jsx';
import CartContextProvider from './ContextApi/AddtoCartContextapi.jsx';

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <CartContextProvider>
      <StrictMode>

        <App />


      </StrictMode>,
    </CartContextProvider>

  </ProductContextProvider>
)
