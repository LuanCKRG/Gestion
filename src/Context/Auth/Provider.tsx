import { useState } from 'react'
import Context from './Context'

const AuthProvider: React.FC = (props) => {
    // Código
    const [ IsLogado, setIsLogado ] = useState<boolean>(false)

    // html
    return(
        <Context.Provider value={ {IsLogado, setIsLogado} }>
            {props.children}
        </Context.Provider>
    )
}

export default AuthProvider