import { useContext } from 'react'
import SearchContext from '../Context/Search/Context'

import { InputBase } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'

import { useStyles } from "../styles"

export const SearchBar: React.FC = () => {
    const classes = useStyles()
    const  { Search, setSearch, setIsUpdating, IsUpdating } = useContext(SearchContext)
    
    function UpdateSearch(ev: string){
        setIsUpdating(!IsUpdating)
        setSearch(ev)
        setIsUpdating(!IsUpdating)
    }

    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Buscar por aluno…" fullWidth  onChange={(ev) =>  UpdateSearch(ev.target.value) } classes={{ root: classes.inputRoot, input: classes.inputInput }} inputProps={{ 'aria-label': 'search' }} />
            </div>
        </>
    )
}