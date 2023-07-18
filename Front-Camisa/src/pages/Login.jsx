import { useState } from "react"
import LojaCamisas from '../assets/Logo.png'
import '../styles/login.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">
              <img src={LojaCamisas} alt="icone_loja_camisas"/>
            </span>

            <span className="login-form-title">Bem Vindo(a)</span>

            <div className="wrap-input">
              <input
                className={username !== "" ? 'has-val input' : 'input'}
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">continuar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
