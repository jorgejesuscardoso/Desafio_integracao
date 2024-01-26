import { useEffect, useState } from "react"
import { LoginProps } from "../../types"
import { HandleLogin } from "../services/ApiPost"
import { useNavigate } from "react-router-dom"
import { Errors, LoginMsg, Main, RegisterMsg } from "./style"

export const Login = () => {
  const navigate = useNavigate()
  const [isUser, setIsUser] = useState<LoginProps>({
    username: "",
    password: "",
  })
  const [isError, setIsError] = useState('')
  const [isLogin, setIsLoging] = useState('')
  const [isLoading, setIsLoading] = useState('')

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/home")
    }
  }, [navigate])

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
      navigate("/home")
      }, 2000)

    } else {
      console.log(isUser);
      console.log(response);
      setIsError("Banco de dados ainda está offline")
    }
    if (response.error) {
      setIsError("Erro ao efetuar login")
    }
  }
  return (
    <Main>
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
              minLength={ 4 }
              maxLength={ 20 }
              required
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
              minLength={ 5}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
            <Errors>{ isError }</Errors>
          <LoginMsg>
            <p>{ isLogin }</p>
            <p>{ isLoading }</p>
          </LoginMsg>
        </div>
        <div>
          <RegisterMsg>
            Não possui uma conta? <a href="/register">Registrar</a>
          </RegisterMsg>
        </div>
      </form>
    </Main>
)
}
