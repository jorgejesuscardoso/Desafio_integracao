/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginProps } from "../../types"
import { RegisterNewUser } from "../services/ApiPost"
import { ContainerButtons, Erro, FormContainer, FormRegister, Mainregister, Peh } from "./style"

export const Register = () => {
  const [newUser, setNewUser] = useState<LoginProps>({
    username: '',
    password: '',
    email: '',
  })
  const [error, setError] = useState<any>(false)
  /* const handleNewUser = () => {
    RegisterNewUser(newUser)
  } */
  return (
    <Mainregister>
      <h1>Registrar novo usuário</h1>
      <FormRegister 
        action="POST"
        onSubmit={ (e) => {
          e.preventDefault();
          setError(!error);
          //handleNewUser();
        }}
      >
        <FormContainer>
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
          <ContainerButtons>
            <button
              type="submit"
            >
              Registrar
            </button>
            <button>Cancelar</button>
          </ContainerButtons>
        </FormContainer>
      </FormRegister>
      <Peh>Voltar ao inicio? <Link to="/">Voltar</Link></Peh>
      <Peh>*Todos os campos são obrigatórios!</Peh>
      <Peh>*Vocẽ pode alterar esses dados nas configurações em seu perfil!</Peh>
      {error && <Erro>Erro ao registrar novo usuário!</Erro>}
    </Mainregister>
  )
}