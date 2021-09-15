import React from 'react'
import './App.css'
import '../Mexa/Mexa.css'
import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Mexa from '../Mexa/Mexa.jsx'
import ComaBem from '../ComaBem/ComaBem.jsx'
import Redes from '../Redes/Redes.jsx'
import Contato from '../Contato/Contato.jsx'
import Rodape from '../Rodape/Rodape.jsx'

import { Route, Switch } from 'react-router'
import { useLocation } from 'react-router-dom'
import Titulo from '../Titulo/Titulo'

function App() {
  const location = useLocation()

  return (
    <div className="conteudo">

      <main className="corpo">

        <Switch>
          <Route exact path="/" render={() => <Inicio />}></Route>
          <Route exact path="/mexa" render={() => <Mexa />}></Route>
          <Route exact path="/comabem" render={() => <ComaBem />}></Route>
          <Route exact path="/redes" render={() => <Redes />}></Route>
          <Route exact path="/contato" render={() => <Contato />}></Route>

        </Switch>
      </main>

    </div>
  )
}

export default App
