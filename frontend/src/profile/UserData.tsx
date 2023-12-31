/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { GetUserData } from '../utils/getUserData';
import { HasToken } from '../utils/storage';
import { Content } from './Style';

export const UserData = () => {
  const { user } = GetUserData()
 
  useEffect(() => {
   HasToken();
  }
  , [])

  return (
    <Content>
      <h3>Dados de Usuário</h3>
      {user ? user.map((user: any) => (
        <div key={user.id}>
          <p><b>Login:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <div>
          </div>
        </div>
      )) :
        <p>Carregando...</p>}
    </Content>
  )
}
