import React from 'react'
import './curator.scss'
import curatorPhoto from '../../images/marcelo-cavalcante.png'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Marcelo Cavalcante" />
            </div>  
            <div className="curator__details">
                <div>
                    <h3>Marcelo Cavalcante</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedor web desde 2008, atualmente Tech Lead na Dasa e professor de Front-end na EBAC.</p>
            </div>
        </div>
    )

}

export default CuratorItem