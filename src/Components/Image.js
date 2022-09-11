import React from 'react'

function Image(props) {
  return (
      <div className='drink'>
           <img src={props.image} />
      <div className='description'>
        <h1>{props.title}</h1>
        <p>{props.strInstructions + props.strInstructionsDE}
        </p>
      </div>
    </div>
  )
}

export default Image