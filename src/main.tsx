import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App}  from './app'
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClent = new QueryClient()

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
  <QueryClientProvider client={queryClent}>
    <App />
  </QueryClientProvider>    
  )
} else {
  console.error("Root element not found")
}

// createRoot(document.getElementById('root')!).render(<App/>)