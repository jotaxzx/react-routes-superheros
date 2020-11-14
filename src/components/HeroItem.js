import React from 'react'
import { Link } from 'react-router-dom'

export const HeroItem = (heroe) => {
    return (
        <>
        <div className="card" style={{ maxWidth: 200}}>

            <img className="card-img-top" src={ `./assets/heroes/${ heroe.id }.jpg`} alt={ heroe.superhero }/>
            <div className="card-body">
            <h5 className="card-title"> { heroe.superhero }  </h5>
                <p className="card-text"> {heroe.alter_ego} </p>  

                <Link to={`./hero/${ heroe.id }`}> 
                More...
                </Link>
                
            </div>
        </div>    
            
        </>
    )
}
