import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'
import App from './App'
import './index.css'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined
const application = clerkKey ? (
  <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">
    <App clerkEnabled />
  </ClerkProvider>
) : <App clerkEnabled={false} />

createRoot(document.getElementById('root')!).render(<StrictMode>{application}</StrictMode>)
