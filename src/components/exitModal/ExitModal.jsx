import React from 'react'
import './exitModal.css'
import { Link } from 'react-router-dom'

const ExitModal = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div className={`exitModal ${active ? 'active' : ''}`}>
          <div className="exitModal__overlay">
            <div className="exitModal__content">
              <p className="exitModal__content-p">Выйти?</p>
              <p className="exitModal__content-text">Точно выйти?</p>
              <button className="exitModal__content-btn">
                <Link to="/" className="exitModal__link">
                  Да, точно
                </Link>
              </button>
              <p
                className="exitModal__content-n"
                onClick={() => setActive(false)}
              >
                Нет, остаться
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ExitModal
