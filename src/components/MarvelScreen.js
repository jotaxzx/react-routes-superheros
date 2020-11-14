import React from 'react'
import { HeroList } from './HeroList'


export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="text-center">Marvel Superheros</h1>

            <hr/>
            <HeroList publisher="Marvel Comics" />
            
        </div>
    )
}
