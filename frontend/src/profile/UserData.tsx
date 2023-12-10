/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { GetUserData } from "../utils/getUserData"

export const UserData = () => {
  const [showPass, setShowPass] = useState(false)
  const { user } = GetUserData()
  
  return (
    <div>
      <h3>Dados de Usuário</h3>
      {user && user.map((user: any) => (
        <div key={user.id}>
          <p><b>Login:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <div>
            <p>
              <b>Senha:</b> { showPass ? `${ user.password }` : '******' }
            </p>
            <button
              onClick={() => setShowPass(!showPass)}
              data-testid={ `profile-show-password-${ user.id }`}
            >
              { showPass ? 'Ocultar' : 'Mostrar' }
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
