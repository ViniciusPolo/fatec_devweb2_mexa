import React from 'react'
import { Link } from 'react-router-dom'
import '../App/App.css'

export default function Header() {
  return (
    <div classname="menu">
      <nav className="navMenu">
        <li>
          <Link to="/" id="icone">
            Voltar
          </Link>
        </li>
        <li>
          <Link to="/academias" id="icone">
            Academias
          </Link>
        </li>
        <li>
          <Link to="/danca" id="icone">
            Dança
          </Link>
        </li>
        <li>
          <Link to="/radicais" id="icone">
            Esportes Radicais
          </Link>
        </li>
        <li>
          <Link to="/arlivre" id="icone">
            Ar-livre
          </Link>
        </li>
        <li>
          <Link to="/melhoridade" id="icone">
            Melhor-idade
          </Link>
        </li>
      </nav>
    </div>
  )
}
