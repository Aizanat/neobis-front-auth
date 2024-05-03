import React, { useState } from 'react'
import illustration from '../../images/illustration.png'
import './welcome.css'
import ExitModal from '../exitModal/ExitModal'

const Welcome = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="welcome">
      <div className="welcome__container">
        <div className="welcome__content">
          <h2 className="welcome__content-h">Добро пожаловать!</h2>
          <p className="welcome__content-p">Lorby - твой личный репетитор</p>
          <img
            className="welcome__content-img"
            src={illustration}
            alt="illustration"
          />
          <button
            className="welcome__content-btn"
            onClick={() => setOpen(true)}
          >
            Выйти
          </button>
        </div>
      </div>
      <ExitModal active={open} setActive={setOpen} />
    </div>
  )
}

export default Welcome
