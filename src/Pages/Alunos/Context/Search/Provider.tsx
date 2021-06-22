import { useState } from 'react'
import Context from './Context'

const SearchProvider: React.FC = (props) => {
    // Código
    const [ Search, setSearch ] = useState<string>('')
    const [ IsUpdating, setIsUpdating ] = useState<boolean>(false)

    // html
    return(
        <Context.Provider value={ { Search, setSearch, IsUpdating, setIsUpdating } }>
            {props.children}
        </Context.Provider>
    )
}

export default SearchProvider