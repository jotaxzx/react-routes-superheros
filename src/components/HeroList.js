import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroItem } from './HeroItem';

export const HeroList = ({ publisher }) => {

            // mando el publisher
    const heroes = getHeroesByPublisher( publisher );
    return (
        
        <div className="card-columns animate__animated animate__fadeIn">
                {
                    heroes.map( heroe => (
                            <HeroItem 
                            key={ heroe.id }
                            
                            {...heroe}
                            />

                    ))
                } 


        </div>
        
    )
}
