import { createContext, Dispatch, SetStateAction } from 'react'

interface LoginType{
    IsLogado: boolean,
    setIsLogado: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext({} as LoginType)

export default AuthContext