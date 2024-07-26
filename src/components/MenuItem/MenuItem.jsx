import React from'react'

export const MenuItem = ({name, description, imageUrl, price}) => {
  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '300px',
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        backgroundColor: '#f1f1f1',
    }}
    >
      <img src={imageUrl} 
      alt={name}
      style={{width: '200px'}}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{price.individual}</span>
    </div>
      
  )
}