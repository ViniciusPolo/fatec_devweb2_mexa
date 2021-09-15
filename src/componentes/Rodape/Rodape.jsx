import React from 'react'
import { Link } from 'react-router-dom'
import '../Rodape/Rodape.css'
import '../App/App.css'
import MexaHeader from '../Mexa/MexaHeader'

export default function Rodape() {
  return (
    <div className="Menu">
      <div className="navMenu">
        <p id="rodape">
          Treine, se alimente bem e seja paciente. Seu corpo irá recompensá-lo.
          <br />
          Não perca tempo mentalizando o tamanho da escada, suba o primeiro
          degrau e saiba do que é capaz.
        </p>
      </div>
    </div>
  )
}
