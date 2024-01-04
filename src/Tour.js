import React from 'react'
const Tour = ({tour:{id, image, info, name, price},new_Tours}) => {
  return (
    <div className='tour-card' id={id}>
        <div className='img-tour-card'>
            <img src={image} alt={name} />
        </div>
        <div className="title-tour-card">
            <h2>{name}</h2>
        </div>
        <p>{info}</p>
        <button className='remove-btn' onClick={()=>new_Tours(id)}>Not Interested</button>
    </div>
  )
};

export default Tour;