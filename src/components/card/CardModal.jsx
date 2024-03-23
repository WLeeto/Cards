import React from 'react'
import './CardModal.css'

import { CardFill } from '../cardFill/CardFill'

export const CardModal = ({ children }) => {

  return (
    <div className="card">
        {children}
    </div>
  )
}
