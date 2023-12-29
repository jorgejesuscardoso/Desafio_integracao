/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginProps, User } from "../types"
import { HandlePhoto } from "../photo/SendImage"

export const Register = () => {
  const [newUser, setNewUser] = useState<LoginProps>({
    username: '',
    password: '',
    email: '',
  })
  const [newUserData, setNewUserData] = useState<User>({
    terms: false,
    first_name: '',
    last_name: '',
    birth_day: '',
    isPhone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    id: 0,
    photo: '',
    banner: '',
    isWhatsapp: true,
    notifications: false,
    ct_email: true,
    ct_phone: false,
    ct_whatsapp: false,
    })
  const handleNewUser = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value
    })
  }
  const handleNewUserData = (e: any) => {
    setNewUserData({
      ...newUserData,
      [e.target.id]: e.target.value
    })
  }
  console.log(newUserData);
  return (
    <div>
      <h1>Registrar novo usuário</h1>
      <form 
        action="POST"
        onSubmit={ (e) => {
          e.preventDefault();
          handleNewUser(e);
          handleNewUserData(e);
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
              onChange={handleNewUser}
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
              onChange={handleNewUser}
            />
            <span>Obs: Senha usada para fazer o login.</span>
          </div>
        </div>
        <div>
          <h2>Dados Para Perfil</h2>
          
          <div>
            <label htmlFor="first_name">Nome:</label>
            <input 
              type="text"
              id="first_name"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="last_name">Sobrenome:</label>
            <input 
              type="text"
              id="last_name"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="birth_day">Data de nascimento:</label>
            <input 
              type="date"
              id="birth_day"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="address">Endereço:</label>
            <input 
              type="text"
              id="address"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="city">Cidade:</label>
            <input 
              type="text"
              id="city"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="state">Estado:</label>
            <input 
              type="text"
              id="state"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <label htmlFor="country">País:</label>
            <input 
              type="text"
              id="country"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
          </div>
          <div>
            <h2>Dados para contato</h2>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input 
              type="email"
              id="email"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUser(e) }
            />
          </div>
          <div>
            <label htmlFor="isPhone">Telefone:</label>
            <input 
              type="tel"
              id="isPhone"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => handleNewUserData(e) }
            />
            <div>
              <h4>Esse número é whatsapp?</h4>
                <select
                  name="isWhatsapp"
                  id="isWhatsapp"
                  onChange={ (e) => handleNewUserData(e)}
                  required
                >
                  <option value="yes">Sim</option>
                  <option value="no">Não</option>
                </select>
            </div>
          </div>
          <div>
            <h3>Gostaria de receber notificações por email?</h3>
            <div>
              <select
                name="notifications"
                id="notifications"
                onChange={ (e) => handleNewUserData(e)}
                required
              >
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
            <h3>Podemos entrar em contato via whatsapp?</h3>
            <div>
              <select
                name="contatoWhatsapp"
                id="ct_whatsapp"
                onChange={ (e) => handleNewUserData(e)}
                required
              >
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
            <h3>Podemos entrar em contato via ligação?</h3>
            <div>
              <select
                name="contatoPhone"
                id="ct_phone"
                onChange={ (e) => handleNewUserData(e)}
              >
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
          </div>
          </div>
        </div>
        <div>
          <h2>Termos de uso</h2>
          <div>
            <input 
              type="checkbox"
              name="terms"
              id="terms"
              required
              onChange={ (e) => handleNewUserData(e)}
              />
            <label htmlFor="terms">Li e concordo com os termos de uso.</label>
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
      <div>
        <HandlePhoto />
      </div>
      <p>Voltar ao inicio? <Link to="/">Voltar</Link></p>
      <p>*Todos os campos são obrigatórios!</p>
      <p>*Vocẽ pode alterar esses dados nas configurações em seu perfil!</p>
    </div>
  )
}