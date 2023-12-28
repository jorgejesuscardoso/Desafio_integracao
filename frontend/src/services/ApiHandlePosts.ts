/* eslint-disable @typescript-eslint/no-explicit-any */
const api = 'http://localhost:3001/post/'

const fetchPost = async (id: number) => {
  const postProfileOrNot = id > 0 ? `${api}${id}` : api
  const response = await fetch(postProfileOrNot)
  const data = await response.json()
  return data
}

export const getPosts = async (id: number) => {
 try {
   const fetch = await fetchPost(id)
   return fetch
 } catch (error) {
    throw new Error("Error fetching posts")
  }
} 

export const sendPost = async (postContent: any, userId: number) => {
  const newPost = {
    content: postContent,
    user_id: userId
  }
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Error sending post")
  }
}