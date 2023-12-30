/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginProps } from "../types"
import { RegisterNewUser } from "../services/ApiPost"

export const Register = () => {
  const [newUser, setNewUser] = useState<LoginProps>({
    username: '',
    password: '',
    email: '',
  })
  const handleNewUser = () => {
    RegisterNewUser(newUser)
  }
  return (
    <div>
      <h1>Registrar novo usuário</h1>
      <form 
        action="POST"
        onSubmit={ (e) => {
          e.preventDefault();
          handleNewUser();
        }}
      >
        <div>
          <h2>Dados para validação</h2>
          <div>
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              placeholder="Digite aqui!"
              required
              onChange={
                (e) => setNewUser({
                ...newUser,
                [e.target.id]: e.target.value
              })}
            />
            <span>Obs: Nome usado para fazer o login.</span>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui!"
              required
              onChange={
                (e) => setNewUser({
                ...newUser,
                [e.target.id]: e.target.value
              })}
            />
            <span>Obs: Senha usada para fazer o login.</span>
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input 
              type="email"
              id="email"
              placeholder="Digite aqui!"
              required
              onChange={
                (e) => setNewUser({
                ...newUser,
                [e.target.id]: e.target.value
              })}
            />
          </div>
        </div>          
        <div>
          <button
            type="submit"
          >
            Registrar
          </button>
          <button>Cancelar</button>
        </div>
      </form>
      <p>Voltar ao inicio? <Link to="/">Voltar</Link></p>
      <p>*Todos os campos são obrigatórios!</p>
      <p>*Vocẽ pode alterar esses dados nas configurações em seu perfil!</p>
    </div>
  )
}