import { LoginProps } from "../types";

const api = 'http://localhost:3001/user';

const fetchDataPostLogin = async (userData: LoginProps) => {
  const { username, password } = userData;
  const response = await fetch(`${api}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  return data;
}

export const HandleLogin = async (data: LoginProps) => {
  try {
    const fetch = await fetchDataPostLogin(data)
    return fetch
   } catch (error) {
     console.log("Problemas ao tentar buscar usuário",error)
     throw error;
   }
}

export const HandleSendPhoto = async (photo: any) => {
  try {
    const response = await fetch(`${api}/photo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(photo)
    });
    const data = await response.json();
    return data;
   } catch (error) {
     console.log("Problemas ao tentar buscar usuário",error)
     throw error;
   }
}
