import React from 'react'
import { HeroList } from './HeroList'


export const DcScreen = () => {
    return (
        <div>
            <h1 className="text-center"> 
                Dc Superheros
            </h1>

            <hr/>
            <HeroList publisher="DC Comics" />
            
        </div>
    )
}
