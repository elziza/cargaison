

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { AllBD } from '../services/BD';
import Aerienne from './typeCargaison/Aerienne';
import Maritime from './typeCargaison/Maritime';
import Routiere from './typeCargaison/Routiere';


export default class Cargaison extends Component {
  
  state={
    // tous les articles de notre bd
    cargaisonsAer:[],
    cargaisonsMar:[],
    cargaisonsRou:[],
   
  };


  componentWillMount(){
    this.majState();
    
  }
  majState=()=>{
    const repoMar=AllBD()[0]["maritime"];
    const repoAer=AllBD()[0]["aerienne"];
    const repoRou=AllBD()[0]["routiere"];
    const mar=repoMar;
    const aer=repoAer;
    const rou= repoRou;
    
    this.setState({
        cargaisonsAer:mar,
        cargaisonsMar:aer,
        cargaisonsRou:rou,
    });
   
    
  }
 
  render() {
    return (
      <>

     
      <div>
      <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">Espace Cargaison</h1>
              <p>WeundeLou Mbaay Mbaay</p>
              <p><NavLink to="/cargaison/nouvelleCargaison" className="btn btn-primary">Ajouter une Cargaison </NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 className='text-center'>Cargaison Aerienne</h2>
      <hr/>
      <div className="nonloop-block-13 owl-carousel d-flex">
          {
           
            this.state.cargaisonsAer.map((aer)=>{
              return <Aerienne key={aer.numero} info={aer} />
            })

          }
        {
          this.state.cargaisonsAer.lenght=== 0 && <p> La liste est vide</p>
        }
      
      </div>
      <hr/> 
    <h2 className='text-center'>Cargaison Maritime</h2>
      <hr/>
      <div className='nonloop-block-13 owl-carousel d-flex'>
          {
           
            this.state.cargaisonsMar.map((mar)=>{
              return <Maritime key={mar.numero} info={mar} />
            })

          }
        {
          this.state.cargaisonsMar.lenght=== 0 && <p> La liste est vide</p>
        }
      
      </div>
      <hr/> 
    <h2 className='text-center'>Cargaison Routiere</h2>
      <hr/>
      <div className='nonloop-block-13 owl-carousel d-flex'>
          {
           
            this.state.cargaisonsRou.map((rou)=>{
              return <Routiere key={rou.numero} info={rou} />
            })

          }
        {
          this.state.cargaisonsRou.lenght=== 0 && <p> La liste est vide</p>
        }
       
       </div>
      {/* <NouvelleCargaison / */}

      </div>
      </>
    )
  }
}
