import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContext from 'Context/Auth/Context'

import LoginPage from 'Pages/Login'
import { NavBar } from 'Pages/NavBar'
import NotFoundPage from 'Pages/NotFound'
import Cadastro from 'Pages/Cadastro'
import AlunosPage from 'Pages/Alunos'
import PagamentosPage from 'Pages/Pagamentos'
import AgendaPage from 'Pages/Agenda'


const Routes: React.FC = () => {
    const { IsLogado } = useContext(AuthContext)

    return (
        <Router>
            <Switch>

                <Route exact path="/" component={LoginPage} />

                {IsLogado && <Route path="/dashboard" component={NavBar} /> }

                <Route path="*" component={NotFoundPage} />

            </Switch>

        </Router>
    )
}

export default Routes