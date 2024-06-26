import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './regLetter.css'
import main_picture from '../../images/main_picture.png'
import EmailModal from '../emailModal/EmailModal'
import arrow from '../../images/arrow_left.svg'

const RegLetter = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="letter">
      <div className="letter__arrow">
        <img src={arrow} alt="arow" className="letter__arrow-img" />
        <Link to={'/registration'} className="letter__link">
          <p className="letter__arow-text">Назад</p>
        </Link>
      </div>
      <div className="letter__container">
        <div className="letter__images">
          <img src={main_picture} alt="" />
        </div>
        <div className="letter__description">
          <p className="letter__title">
            Выслали письмо со ссылкой для <br />
            завершения регистрации на <br />
            example@gmail.com
          </p>
          <p className="letter__text">
            Если письмо не пришло, не <br />
            спеши ждать совиную почту - <br />
            лучше <span className="letter__text-span">
              проверь ящик “Спам”
            </span>{' '}
            <br />
          </p>
          <span className="letter__text-svg"> (´｡• ω •｡`)</span>
          <button className="letter__btn" onClick={() => setModal(true)}>
            Письмо не пришло
          </button>
        </div>
      </div>
      <EmailModal active={modal} setActive={setModal} />
    </div>
  )
}

export default RegLetter
