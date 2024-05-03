import React from 'react'
import './emailModal.css'

function EmailModal({ active, setActive }) {
  return (
    <>
      {active && (
        <div className={`emailModal ${active ? 'active' : ''}`}>
          <div className="emailModal__overlay">
            <div className="emailModal__content">
              <p className="emailModal__content-title">
                Мы выслали еще одно письмо <br />
                на указанную тобой почту <br />
                example@gmail.com
              </p>
              <p className="emailModal__content-text">
                Не забудь проверить <br />
                ящик “Спам”!11!!!!
              </p>
              <button
                className="emailModal__content-btn"
                onClick={() => setActive(false)}
              >
                Понятно!!1!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmailModal
