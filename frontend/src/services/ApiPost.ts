/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginProps } from "../types";

const api = 'http://localhost:3001/user';
const apiPhoto = 'http://localhost:3001/photo';

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

const fetchPhotos = async (photo: FormData) => {

  const response = await fetch(`${apiPhoto}/upload`, {
    method: 'POST',
    body: photo
  });
  
  const data = await response.json();
  return data;
}

export const HandleSendPhoto = async (photo: FormData,) => {

  try {
    const fetch = await fetchPhotos(photo)
    return fetch;
   } catch (error) {
     console.log("Problemas ao tentar buscar usuário",error)
     throw error;
   }
}

const fetchBanner = async (banner: FormData) => { 
    const response = await fetch(`${apiPhoto}/banner`, {
      method: 'POST',
      body: banner
    });
    
    const data = await response.json();
    return data;
  }

export const HandleSendBanner = async (banner: FormData,) => {  
    try {
      const fetch = await fetchBanner(banner)
      return fetch;
    } catch (error) {
      console.log("Problemas ao tentar buscar usuário",error)
      throw error;
    }
  }