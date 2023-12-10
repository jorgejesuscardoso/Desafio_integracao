const api = 'http://localhost:3001/user';

const fetchData = async (userData: string) => {
  const response = await fetch(userData)
  const data = await response.json()
  return data
}

export async function getUser(id: number) { 
  const userData = !id ? api : `${api}/${id}`;
  try {
   const fetch = await fetchData(userData)
   return fetch
  } catch (error) {
    console.log("Problemas ao tentar buscar usuário",error)
    throw error;
  }
}
export async function getPersonalData(id: number) { 
  const userData = !id ? api : `${api}/${id}/data`;
  try {
    const fetch = await fetchData(userData)
    return fetch    
  } catch (error) {
    console.log("Problemas ao tentar buscar dados pessoais do usuário",error)
    throw error;
  }
}
