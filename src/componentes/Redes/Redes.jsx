import React from 'react'

import './Redes.css'
import Titulo from '../Titulo/Titulo.jsx'
import '../App/App.css'
import '../Inicio/Inicio.css'
import Header from '../Header/Header'
import Rodape from '../Rodape/Rodape'

export default function Redes() {
  return (
    <div>
      <Header />
      <Titulo texto="Nos encontre por ai... " />

      <div className="redes">
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
        </head>
        <div className="row">
          <div className="col-4 offset-1">
            <div className="inicio_api">
              <h1>Youtube</h1>
            </div>
          </div>
          <div className="col-4 offset-1">
            <div className="inicio_api">
              <h1>FaceBook</h1>
            </div>
          </div>
          <div className="col-4 offset-1">
            <div className="inicio_api">
              <h1>Instagram</h1>
            </div>
          </div>
          <div className="col-4 offset-1">
            <div className="inicio_api">
              <h1>tictok</h1>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  )
}
