/* eslint-disable @typescript-eslint/no-explicit-any */
/* const api = 'http://localhost:3001/user';

const fetchData = async (userData: string) => {
  const response = await fetch(userData)
  const data = await response.json()
  return data
}
 */
export async function getUser() { 
 // const userData = !id ? api : `${api}/${id}`;
  try {
   //const fetch = await fetchData(userData)
   return []
  } catch (error) {
    console.log("Problemas ao tentar buscar usuário",error)
    throw error;
  }
}
export async function getPersonalData() { 
  //const userData = !id ? api : `${api}/${id}/data`;
  try {
    //const fetch = await fetchData(userData)
    return []    
  } catch (error) {
    console.log("Problemas ao tentar buscar dados pessoais do usuário",error)
    throw error;
  }
}

export async function deleteAccount(): Promise<void> {
  /* const deleteUser = `${api}/${id}`;
  const deleteData = `${api}/${id}/data`;
  const deleteUrl = !data ? deleteUser : deleteData;  */

  try {
    /* const response = await fetch(deleteUrl, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorMessage = `Erro ao excluir usuário: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }
 */
  } catch (error) {
    console.error("Problemas ao tentar deletar usuário", error);
    throw error;
  }
}

