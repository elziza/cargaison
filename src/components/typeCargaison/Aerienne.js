

import React from 'react'
import { Link } from 'react-router-dom';

export default function Aerienne(props) {
  const {image,dateDep,dateAr,lieuDep,lieuArr,numero,distance}= props.info;
  // console.log(props.numero)
  return (
   
    <div className="item-1 h">
                   <Link to={`/cargaison/aerienne/${numero}/detailsAerienne`}>
                      <img src={image} className="img-fluid" alt=''/>
                   </Link>
                <div className="item-1-contents">
                 
                  <ul>
                    <li className="d-flex"><h3 className='text-uppercase'>Numéro du cargaison :</h3><h3 className="price ml-auto">{numero}</h3></li>
                    <li className="d-flex"><span className='text-uppercase'>Distance :</span> <span className="price ml-auto">{distance} km</span></li>
                    <li className="d-flex"><span className='text-uppercase'>Date de Depart :</span> <span className="price ml-auto">{dateDep}</span></li>
                    <li className="d-flex"><span className='text-uppercase'>Date d'arrivée :</span><span className="price ml-auto">{dateAr}</span></li>
                    <li className="d-flex"><span className='text-uppercase'>Lieu de depart :</span><span className="price ml-auto">{lieuDep}</span></li>
                    <li className="d-flex"><span className='text-uppercase'>Lieu D'arrivée :</span><span className="price ml-auto">{lieuArr}</span></li>
                  </ul>
                </div>
    </div>
  
  )
}
