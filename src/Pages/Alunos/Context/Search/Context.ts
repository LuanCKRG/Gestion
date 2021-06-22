import { createContext, Dispatch, SetStateAction } from 'react'

interface SearchType{
    Search: string,
    setSearch: Dispatch<SetStateAction<string>>,
    IsUpdating: boolean,
    setIsUpdating: Dispatch<SetStateAction<boolean>>,
}

const SearchContext = createContext({} as SearchType)

export default SearchContext