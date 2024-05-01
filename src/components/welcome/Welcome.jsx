import React from 'react'
import main_picture from '../../images/main_picture.png'

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <div className="welcome__content">
          <h2 className="welcome__content-h">Добро пожаловать!</h2>
          <p className="welcome__content-p">Lorby - твой личный репетитор</p>
          <img
            className="welcome__content-img"
            src={main_picture}
            alt="main_picture"
          />
          <button className="welcome__content-btn">Выйти</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
