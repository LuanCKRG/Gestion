import React from 'react'
import LoginPage from 'Pages/Login'
import GlobalStyle from 'Styles/Global'
import { NavBar } from './Pages/NavBar/index'
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
