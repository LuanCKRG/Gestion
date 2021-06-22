import Cadastro from '../Cadastro/index'
import AlunosPage from '../Alunos/index'
import AgendaPage from '../Agenda/index'
import PagamentosPage from '../Pagamentos/index'

import { Header, Navegation } from "./styles"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NotFoundPage from 'Pages/NotFound'
import React from 'react'
import GlobalStyle from 'Styles/Global'


export const NavBar = () => {

  return (
    <Router>
      <GlobalStyle />
      <Header>
        <span> Gestion </span>

        <Navegation>
          <Link to="/dashboard/Cadastro"><li>Cadastro</li></Link>
          <Link to="/dashboard/Alunos"><li>Alunos</li></Link>
          <Link to="/dashboard/Agenda"><li>Agenda</li></Link>
          <Link to="/dashboard/Pagamentos"><li>Pagamentos</li></Link>
        </Navegation>
      </Header>
      
      <Switch>
        <Route path="/dashboard/Cadastro" component={Cadastro} />
        <Route path="/dashboard/Alunos" component={AlunosPage} />
        <Route path="/dashboard/Agenda" component={AgendaPage} />
        <Route path="/dashboard/Pagamentos" component={PagamentosPage} />
      </Switch>
    </Router>
  )
}
