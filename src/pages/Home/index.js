import React, { useContext, useEffect, useState } from 'react'
import './styles.scss'
import imageDestack from '../../images/imagem-destaque.png'
import { FilterContext } from '../../contexts/FilterContext'
import Pills from '../../components/Pills'
import { useParams } from 'react-router'
import { LocationContext } from '../../contexts/LocationContext'

const PLACES = [
    'Mercados',
    'Museus',
    'Parques',
    'Todos'
]

const Home = () => {
    const { city, state } = useParams()
    const { setCity, setState } = useContext(LocationContext)
    const { filteredPlace, setFilteredPlace} = useContext(FilterContext)

    const handleFilterPlace = (item) => {
        if(item !== filteredPlace){
            setFilteredPlace(item)
        } 
        
        if (item === 'Todos'){
            setFilteredPlace('')
        }

    }

    useEffect(() => {
        setCity(city)
        setState(state)
    }, [city, state])

    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{ city } para todos</h1>
                <div className="home__image home__image--destack hide-desktop">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
                <p className="home__text">Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas que buscam alternativas culturais para sair de casa, com a mobilidade que todo cidadão precisa. </p>
                <p className="home__text">Checamos 10 itens essenciais de acessibilidade para pessoas com deficiência em diversos pontos da cidade. </p>
                <div className="home__pills">
                    {
                        PLACES.map((item) => (      
                            <Pills
                                local={item}
                                selected={filteredPlace === item }
                                item={item}
                                onClick={ () => handleFilterPlace(item) }
                            />

                        ))
                    }

                </div>
            </div>
            <div className="home__col">
                <div className="home__image home__image--destack hide-mobile">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
            </div>
        </main>
    )
}

export default Home;