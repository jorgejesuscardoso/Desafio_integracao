import { useState } from "react"
import { User } from "../types"
import { HasToken } from "../utils/storage"
import { InsertUserData } from "../services/ApiPost"
import { useNavigate } from "react-router-dom"
import { BackProfile, SendData } from "./Style"

export const ProfileEdit = () => {
  const navigate = useNavigate()
  const userId = HasToken()
  const [newUserData, setNewUserData] = useState<User>({
    first_name: '',
    last_name: '',
    birth_day: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    user_id: userId,
    isWhatsapp: 'yes',
    notification: 'yes',
    ct_email: 'yes',
    ct_phone: 'yes',
    ct_whatsapp: 'yes',
    })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    InsertUserData(newUserData, userId)
    console.log(newUserData)
  }
  const handleNavigate = () => {
    navigate('/profile')
  }
  return (
    <div>
      <form action="POST" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="first_name">Nome:</label>
          <input 
            type="text"
            id="first_name"
            placeholder="Digite aqui!"
            required
            onChange={ (e) => setNewUserData({
            ...newUserData,
            [e.target.id]: e.target.value
          }) }
          />
        </div>
        <div>
          <label htmlFor="last_name">Sobrenome:</label>
          <input 
            type="text"
            id="last_name"
            placeholder="Digite aqui!"
            required
            onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>
        <div>
          <label htmlFor="birth_day">Data de nascimento:</label>
          <input 
            type="date"
            id="birth_day"
            placeholder="Digite aqui!"
            required
            onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>
        <div>
          <label htmlFor="address">Endereço:</label>
          <input 
            type="text"
            id="address"
            placeholder="Digite aqui!"
            required
            onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input 
            type="text"
            id="city"
            placeholder="Digite aqui!"
            required
            onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <input 
            type="text"
            id="state"
            placeholder="Digite aqui!"
            required
              onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <input 
            type="text"
            id="country"
            placeholder="Digite aqui!"
            required
              onChange={ (e) => setNewUserData({
              ...newUserData,
              [e.target.id]: e.target.value
            }) }
          />
        </div>        
        <div>
          <div>
            <label htmlFor="isPhone">Telefone:</label>
            <input 
              type="tel"
              id="phone"
              placeholder="Digite aqui!"
              required
              onChange={ (e) => setNewUserData({
                ...newUserData,
                [e.target.id]: e.target.value
              }) }
              />
            <div>
            <h4>Esse número é whatsapp?</h4>
              <select
                name="isWhatsapp"
                id="isWhatsapp"
                onChange={ (e) => setNewUserData({
                  ...newUserData,
                  [e.target.id]: e.target.value
                }) }
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
                onChange={ (e) => setNewUserData({
                  ...newUserData,
                  [e.target.id]: e.target.value
                }) }
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
                onChange={ (e) => setNewUserData({
                  ...newUserData,
                  [e.target.id]: e.target.value
                }) }
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
                onChange={ (e) => setNewUserData({
                  ...newUserData,
                  [e.target.id]: e.target.value
                }) }
              >
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <SendData type="submit">Enviar</SendData>
        </div>
      </form>
      <BackProfile onClick={ handleNavigate }>Voltar para o perfil</BackProfile>
    </div>
  )}