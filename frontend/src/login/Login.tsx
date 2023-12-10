import { useState } from "react"
import { LoginProps } from "../types"
import { HandleLogin } from "../services/ApiPost"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const [isUser, setIsUser] = useState<LoginProps>({
    username: "",
    password: "",
  })
  const [isError, setIsError] = useState('')
  const [isLogin, setIsLoging] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const handleLogin = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await HandleLogin(isUser)

    if (response.token) {
      localStorage.setItem("token", response.token)
      localStorage.setItem("userData", JSON.stringify(response.user))

      setIsError("")
      setIsLoging("Login efetuado com sucesso!")
      setIsLoading("Carregando...")

      setTimeout(() => {
      navigate("/profile")
      }, 2000)

    } else {
      console.log(isUser);
      console.log(response);
      setIsError("Usuário ou senha incorretos!")
    }
  }
  return (
    <main>
      <form onSubmit={ (e) => handleLogin(e) }>
        <h1>Login</h1>
        <div>
          <div>
            <label htmlFor="username">Login: </label>
            <input
              type="text"
              id="username"
              value={ isUser.username }
              onChange={(e) => {
                setIsUser({ ...isUser, username: e.target.value });
                setIsError('')
                setIsLoging('')
                }
              }
              placeholder="Digite seu nome de usuário"
            />
          </div>
          <div>
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              id="password"
              value={ isUser.password }
              onChange={(e) => {
                setIsUser({ ...isUser, password: e.target.value });
                setIsError('')
                setIsLoging('')
                }
              }
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <p>{ isError }</p>
            <p>{ isLogin }</p>
            <p>{ isLoading }</p>
          </div>
        </div>
        <div>
          <p>
            Não possui uma conta? <a href="/register">Registrar</a>
          </p>
        </div>
      </form>
    </main>
)
}
