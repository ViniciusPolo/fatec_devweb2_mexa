import React from 'react'

import './ComaBem.css'
import Titulo from '../Titulo/Titulo.jsx'
import '../App/App.css'
import Header from '../Header/Header'
import Rodape from '../Rodape/Rodape'

export default function ComaBem() {
  return (
    <div>
      <Header />
      <Titulo texto="Restaurantes " />

      <div className="comabem">
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
            <h2>Encontre onde se mexer</h2>
          </div>
          <div className="col-4 offset-1">
            <h2>Destaque</h2>
          </div>
          <div className="col-4 offset-1">
            <div className="inicio_api">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam officia accusantium dolores inventore cumque quia
                sapiente et eos, quas temporibus nihil nisi qui. Nostrum ipsum,
                nemo aut odit explicabo voluptates!
              </p>
            </div>
          </div>
          <div className="col-4 offset-1">
            <div className="inicio_destaque">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                aperiam atque impedit numquam nostrum minima aliquam ullam
                dolorem esse dolore. Quaerat nesciunt sequi fugit, praesentium
                natus aut vitae consequuntur possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  )
}
