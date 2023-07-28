

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { AllBD } from '../../services/BD';
import Alimentaire from '../typeProduits/Alimentaire';
import Chimique from '../typeProduits/Chimique';
import Materiel from '../typeProduits/Materiel';


export default class DetailsMaritime extends Component {
  
  state={
    // tous les articles de notre bd
    produitsAlim:[],
    produitsChim:[],
    produitsMAt:[],
  };



  componentWillMount(){
    this.majState();
    
  }
  majState=()=>{
    const alim=AllBD()[0]["maritime"][0]["alimentaires"];
    const chim=AllBD()[0]["maritime"][0]["chimiques"];
    const mat= AllBD()[0]["maritime"][0]["materiels"];

    this.setState({
      produitsAlim:alim,
      produitsChim:chim,
      produitsMAt:mat,
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
              <h1 className="mb-3">Espace Produits</h1>
              <p>Notre Banque de  Produits</p>
              <p><NavLink to="/produit/nouveauProduit" className="btn btn-primary">Ajouter Produit </NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 className='text-center'>Vos Produits Alimentaire</h2>
      <hr/>
      <div className='row mt-5'>
          {
           
            this.state.produitsAlim.map((ali)=>{
              return <Alimentaire key={ali.id} info={ali} />
            })

          }
            
        {
          this.state.produitsAlim.lenght=== 0 && <p> La liste est vide</p>
        }
      
      </div>
      <hr/> 
    <h2 className='text-center'>Vos Produits Chimique</h2>
      <hr/>
      <div className='row mt-5'>
          {
           
            this.state.produitsChim.map((chi)=>{
              return <Chimique key={chi.id} info={chi} />
            })

          }
        {
          this.state.produitsChim.lenght=== 0 && <p> La liste est vide</p>
        }
      
      </div>
      <hr/> 
    <h2 className='text-center'>Vos Produits Materiel</h2>
      <hr/>
      <div className='row mt-5'>
          {
           
            this.state.produitsMAt.map((mat)=>{
              return <Materiel key={mat.id} info={mat} />
            })

          }
        {
          this.state.produitsMAt.lenght=== 0 && <p> La liste est vide</p>
        }
      
      </div>
      </div>
      </>
    )
  }
}
