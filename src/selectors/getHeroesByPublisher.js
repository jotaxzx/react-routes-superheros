import { heroes } from "../data/data";


export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    //si el publisher que envia no es valido (dc comics o marvel comics), mandara un mensaje de error.

    
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${ publisher }" no existe`);
    }
        return heroes.filter( heroe => heroe.publisher === publisher);
    
    




}

