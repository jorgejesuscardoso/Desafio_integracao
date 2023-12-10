/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { getUser } from "../services/Api"

export function Profile() {
  const [user, setUser] = useState<any>([])
  const [showPass, setShowPass] = useState(false)
  useEffect(() => {
    async function fetchUser() {
      const response = await getUser(4)
      setUser(response)
    }
    fetchUser()
  }, [])
  return (
    <div>
      <h1>SocialBush</h1>
      <h3>Usuário</h3>
      {user && user.map((user: any) => (
        <div key={user.id}>
          <p><b>Login:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <div>
            <p>
              <b>Senha:</b> { showPass ? `${ user.password }` : '******' }
            </p>
            <button onClick={() => setShowPass(!showPass)}>
              { showPass ? 'Ocultar' : 'Mostrar' }
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
