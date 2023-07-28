

import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Chimique(props) {
  const {id,libelle,image,poids,volume,degresTox,autresFraisChimique,fraisMaritime}= props.info;
  return (
    
    <div className='col-3'>

    <div className="card " >
        <a href={`#/produitChimique/${id}`}>
        <img className='card-img-top' src={image}  alt=''/>
        </a>
      <div className="card-body">
        <h5 className="card-title">{libelle}</h5>
        <div className='d-flex justify-content-between'>
        <h6>{poids} kg</h6>

        </div>
       
      </div>
      {/* <button className=" btn btn-sm btn-warning">plus de details</button> */}
      <div className="panel nonloop-block-13 owl-carousel d-flex">
        <ul>
                    <li className="d-flex"><h6>Volume : </h6> <h6 className="price ml-auto">{volume} m³</h6></li>
                    <li className="d-flex"><h6>Degrès de Toxicité : </h6><h6 className="price ml-auto">{degresTox} °</h6></li>
                    <li className="d-flex"><h6>Frais Maritime : </h6><h6 className="price ml-auto">{fraisMaritime} cfa</h6></li>
                    <li className="d-flex"><h6>Entretien : </h6><h6 className="price ml-auto">{autresFraisChimique} cfa</h6></li>
        </ul>
      </div>
       
      <p><NavLink to="#" className="btn btn-danger m-4"> supprimer </NavLink></p>

        </div>
    </div>
  
  
  
  )
}
