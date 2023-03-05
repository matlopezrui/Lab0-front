import React from 'react'
import "./ClassSelectionColumn.css";
import { Link } from "react-router-dom";
import personIcon from '../icons/personIcon.png'
import houseIcon from '../icons/houseIcon.png'
import mapIcon from '../icons/mapIcon.png'

function ClassSelectionColumn() {
  return (
    <div className='Class-selection-Column'>
        <Link to ={'/read/persona'} style= {{ textDecoration: 'none' }}>
            <img src={personIcon} alt="personIcon" className='personIcon'/>
            <div className='Class-column-button'>
                <h4>Persona</h4>
            </div>
        </Link>

        <Link to ={'/read/vivienda'} style= {{ textDecoration: 'none' }}>
            <img src={houseIcon} alt="houseIcon" className='houseIcon'/>
            <div className='Class-column-button'>
                <h4>Vivienda</h4>
            </div>
        </Link>

        <Link to ={'/read/municipio'} style= {{ textDecoration: 'none' }}>
            <img src={mapIcon} alt="mapIcon" className='mapIcon'/>
            <div className='Class-column-button'>
                <h4>Municipio</h4>
            </div>
        </Link>
    </div>
  )
}

export default ClassSelectionColumn;
