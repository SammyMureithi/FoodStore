import React ,{ useContext } from 'react'
import { Context } from './Drinks'
import Image from './Image';

function Drink() {
  const { allDrinks } = React.useContext(Context)
  const res = allDrinks.map( element => {
    <Image key={element.id} {...element}/>
  } )
    return (
      <>
        <h1>DRINKS</h1>
        {res}
      </>
    )
  }


export default Drink

