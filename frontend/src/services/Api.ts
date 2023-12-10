const api = 'http://localhost:3001/user';

export async function getUser(id: number) { 
  const endpoint = `${api}/${id}`;
    const fetchData = async () => {
      const response = await fetch(endpoint)
      const data = await response.json()
      console.log(data)
      return data
    }
  return fetchData()
}
