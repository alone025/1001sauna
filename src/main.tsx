import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ModalProvider } from './context/modalContext.tsx'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <ChakraProvider>
      <ModalProvider>
      <App />
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
