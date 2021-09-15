import React from 'react'
import './Titulo.css'
import '../App/App.css'

export default function Titulo(props) {
  return (
    <div className="titulo">
      <h1>{props.texto}</h1>
    </div>
  )
}
