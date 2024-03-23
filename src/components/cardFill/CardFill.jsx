import React from 'react'

export const CardFill = ({ props }) => {

  const {title, text, img} = props

  return (
    <>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </>
  )
}
