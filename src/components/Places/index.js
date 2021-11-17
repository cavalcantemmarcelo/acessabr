import React from 'react'
import Slider from '../Slider'
import './places.scss'

const Places = () => {
    return(
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">Locais <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h5>Ordernar por:</h5>
                    <select>
                        <option>distância</option>
                        <option>alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider />
            </div>
        </section>
    )
}

export default Places