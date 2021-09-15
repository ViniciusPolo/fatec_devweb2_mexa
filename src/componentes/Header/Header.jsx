import React from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'
import './Header.css'
import MexaHeader from '../Mexa/MexaHeader'

export default function Header() {
  return (
    <div className="Menu">
      <nav className="navMenu">
        <li id="logo">Mexa</li>
        <li>
          <Link to="/" id="icone">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/mexa" id="icone">
            Mexa-se
          </Link>
        </li>
        <li>
          <Link to="/comabem" id="icone">
            Coma-bem
          </Link>
        </li>
        <li>
          <Link to="/redes" id="icone">
            Redes
          </Link>
        </li>
        <li>
          <Link to="/contato" id="icone">
            Contato
          </Link>
        </li>
      </nav>
    </div>
  )
}
