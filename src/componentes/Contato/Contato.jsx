import React from 'react'

import './Contato.css'
import Titulo from '../Titulo/Titulo.jsx'
import '../App/App.css'
import Header from '../Header/Header'
import Rodape from '../Rodape/Rodape'

export default function Contato() {
  return (
    <div>
      <Header />
      <Titulo texto="Fale Conosco " />

      <div className="contato">
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
        </head>
        <form action="">
          <div class="row">
            <div class="col-md-4 offset-md-1">
              <label for="">Nome (aquele que quer eu te chame)</label>
              <input type="text" class="form-control" name="nome" />
            </div>
            <div class="col-md-2 offset-md-1">
              <label for="">Gênero</label>
              <select class="form-control" name="marca">
                <option value="">Homem-cis</option>
                <option value="">Mulher-cis</option>
                <option value="">Homem-trans</option>
                <option value="">Mulher-trans</option>
              </select>
            </div>
            <div class="col-md-2 offset-md-1">
              <label for="">Idade</label>
              <select class="form-control" name="marca">
                <option value="">Menor de 18</option>
                <option value="">entre 18 e 30</option>
                <option value="">entre 30 e 45</option>
                <option value="">entre 45 e 60</option>
                <option value="">Melhor-idade</option>
              </select>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 offset-md-1">
              <label for="">telefone</label>
              <input type="text" class="form-control" name="telefone" />
            </div>
            <div class="col-md-5 offset-md-1">
              <label for="">email</label>
              <input type="text" class="form-control" name="" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <label for="">Endereço (opcional)</label>
            </div>
            <div class="col-md-4 offset-md-1">
              <label for="">Rua</label>
              <input type="text" class="form-control" name="placa" />
            </div>
            <div class="col-md-1 offset-md-1">
              <label for="">Número</label>
              <input type="text" class="form-control" name="numero" />
            </div>
            <div class="col-md-3 offset-md-1">
              <label for="">Bairro</label>
              <input type="text" class="form-control" name="placa" />
            </div>
            <div class="col-md-10 offset-md-1">
              <input type="checkbox" name="acessorios" value="bagageiro" />
              <label>Deseja receber nossos informes</label>
            </div>
          </div>
          <div class="row">
            <br />
            <div class="col-md-10 offset-md-1">
              <label for="">Preferências: </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-1">
              <input type="checkbox" name="tipodeesporte" value="academia" />
              Academia
              <input type="checkbox" name="tipodeesporte" value="dança" />
              Danças
              <input type="checkbox" name="tiposdeesporte" value="radicais" />
              Esportes-Radicais
              <input type="checkbox" name="tipodeesporte" value="ar-livre" />
              Ar-livre
              <input
                type="checkbox"
                name="tipodeesporte"
                value="Melhor-idade"
              />
              Melhor Idade
            </div>
            <div class="col-md-3 offset-1">
              <label for="">Outro? Qual: </label>
              <input type="text" class="form-control" name="qual" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 offset-md-1">
              <label for="">Peso (kg)</label>
              <input type="number" class="form-control" min="20" name="PESO" />
            </div>
            <div class="col-md-1 offset-md-1">
              <label for="">Altura (cm)</label>
              <input
                type="number"
                class="form-control"
                min="100"
                name="altura"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <label for="">Deixe sua mensagem</label>
              <textarea type="text" class="form-control" name="nome" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 offset-md-4">
              <button type="submit" class="btn btn-sucess">
                Confirmar
              </button>
            </div>
            <div class="col-md-3 offset-md-0">
              <button type="submit" class="btn btn-warning">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
      <Rodape />
    </div>
  )
}
