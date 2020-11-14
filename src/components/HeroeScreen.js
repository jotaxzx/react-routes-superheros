import React from 'react'
import { useParams, Redirect, withRouter  } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();

    // aqui invoco a la funcion geHeroesBytId para que busque por el id que viene en el url en la data.
    const hero = getHeroesById( heroeId );

   

    if (!hero) {
       return <Redirect to="/"/>
    }

    const handleReturn = () => {

        history.goBack();
    }

    

    
    return (
        <div className="card mt-5 animate__animated animate__fadeInLeft" >
            <div className="row">  
                <img 
                className="card-img img-thumbnail"
                style={{maxWidth: 200}}
                src={ `../assets/heroes/${ heroeId }.jpg` }
                alt={ hero.superhero }/>
                
                <div className="card-body">
                    <h5 className="card-title text-center">{hero.superhero}</h5>
                    

                    <ul className="list-group list-group-flush">
                        
                        <li className="list-group-item"><b>Alter Ego: </b>{ hero.alter_ego}</li>
                        <li className="list-group-item"><b>Publisher: </b>{ hero.publisher}</li>
                        <li className="list-group-item"><b>First Appearance: </b>{ hero.first_appearance}</li>
                    </ul>

                    <button 
                    className="btn btn-primary ml-3 mt-2"
                    onClick={ handleReturn }
                    >
                       Return 
                    </button>
                    
                </div>
                
                
                
            </div>
            
        </div>
     
    )
}
