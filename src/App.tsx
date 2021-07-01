import React from 'react'
import AuthProvider from 'Context/Auth/Provider'
import Routes from './Routes'


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>

        <Routes />
        
      </AuthProvider>
    </>
  )
}

export default App
