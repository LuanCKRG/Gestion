import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const NotFoundPage: React.FC = () => {
    const history = useHistory()
    
    useEffect(
        () => {
            history.replace('/')
        }, []
    )

    return(
        <h1>Loga ai irmão</h1>
    )
}

export default NotFoundPage