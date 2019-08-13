import React from 'react'

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} id="button" className="button" onClick={onClick}>
      {children}
    </button>
  </div>
)

export default Button