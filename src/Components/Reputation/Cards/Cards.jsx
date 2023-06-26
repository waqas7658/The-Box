import React from 'react'
import "../Cards/Cards.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = (card) => {
  return (
    <>
    <div className="card">
         <div className='icon'>
         <FontAwesomeIcon icon={card.icon} />
         </div>
         <div className="title">
         <p className='title_p'> {card.title}</p>
         </div>
    <div className="description">
        <p className='description_p'>{card.description}</p>

    </div>
    </div>

    </>
  )
}

export default Cards
