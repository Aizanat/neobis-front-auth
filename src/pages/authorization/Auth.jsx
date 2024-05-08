import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import main_picture from '../../images/main_picture.png'
import './auth.css'
import { useSearchParams } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-bootstrap-icons'

const Auth = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async () => {
    try {
      // Отправка данных на сервер для входа
      const response = await axios.post(
        'http://164.92.130.84:8080/api/v1/auth/authenticate',
        {
          login,
          password,
        }
      )

      // Если вход успешен, сохраняем токены в локальном хранилище
      const { accessToken, refreshToken } = response.data
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      // Добавляем токены к параметрам поиска
      setSearchParams({
        access_token: accessToken,
        refresh_token: refreshToken,
      })

      if (response.status === 200) {
        navigate('/welcome')
      }
    } catch (error) {
      console.error('Ошибка при входе:', error)
      // Обработка ошибок
    }
    setError('Неверный логин или пароль')
    setTimeout(() => {
      setError(null)
    }, 5000)
  }
  const handleEye = () => {
    setShow(!show)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="login">
      <div className="login__img">
        <img src={main_picture} alt="boy-img" className="login__img-boy" />
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        {error && (
          <div className="login__form-error">
            <p className="login__form-error-text">{error}</p>
          </div>
        )}
        <p className="login__form-p">Вэлком бэк!</p>
        <label className="login__form-label">
          <input
            type="text"
            placeholder="Введите логин (login)"
            className="login__form-input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label className="login__form-password">
          <input
            type={show ? 'text' : 'password'}
            placeholder="Введите пароль"
            className="login__form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleEye} className="login__form-eye">
            {/* {show ? (
              <BsEye className="login__form-eye" />
            ) : (
              <BsEyeSlash className="login__form-eye" />
            )} */}
          </button>
        </label>
        <button className="login__form-btn" onClick={handleLogin}>
          Войти
        </button>
        <Link to={'/registration'} className="login__form-link">
          <p className="login__form-text">У меня еще нет аккаунта</p>
        </Link>
      </form>
    </div>
  )
}

export default Auth
