import React, { useEffect } from 'react'
import { useState } from 'react'
import Drink from './Drink';

function Drinks() {
    const [drinks, setDrinks] = useState([]);
    useEffect( () => {
        fetch( "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b" )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Error Fetching" );
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => {
                setDrinks( data.drinks );
            } )
            .catch( ( error ) => console.log( error ) );
    }, [] );
    console.log( "Drinks" );
    const myDrinks = drinks.map( element => {
        return <Drink image={element.strDrinkThumb} title={element.strDrink}
            para={element.strInstructions + element.strInstructionsDE} key={ element.idDrink} />
    })
  return (
      <div>
          {myDrinks}
    </div>
  )
}

export default Drinks