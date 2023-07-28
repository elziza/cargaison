

// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { addProduitAlim,} from '../services/AlimentaireBD';
// import { AllBD } from '../services/BD';
// import Alimentaire from './typeProduits/Alimentaire';
// import Chimique from './typeProduits/Chimique';
// import Materiel from './typeProduits/Materiel';
// import NouveauProduit from './form/NouveauProduit';


// export default class Produit extends Component {
  
//   state={
//     // tous les articles de notre bd
//     produitsAlim:[],
//     produitsChim:[],
//     produitsMAt:[],
//   };

//   // componentDidMount(){

//   // }
//   AllAlim(){
//     const repoAlimMaritime=AllBD()[0]["maritime"][0]["alimentaires"];
//     const repoAlimChimique=AllBD()[0]["aerienne"][0]["alimentaires"];
//     const repoAlimRoutiere=AllBD()[0]["routiere"][0]["alimentaires"];
//     // ici j'ai utilisé la syntaxe spread
//     const al=[...repoAlimMaritime,...repoAlimChimique,...repoAlimRoutiere]
//     return al;
//   }
//   AllChim=()=>{
//     const repoChimMaritime=AllBD()[0]["maritime"][0]["chimiques"];
//     const repoChimmChimique=AllBD()[0]["aerienne"][0]["chimiques"];
//     const repoChimRoutiere=AllBD()[0]["routiere"][0]["chimiques"];
//     const ch=repoChimMaritime.concat(repoChimmChimique,repoChimRoutiere)
//     return ch;
//   }
//   AllMat=()=>{
//     const repoMatMaritime=AllBD()[0]["maritime"][0]["materiels"];
//     const repoMatChimique=AllBD()[0]["aerienne"][0]["materiels"];
//     const repoMatRoutiere=AllBD()[0]["routiere"][0]["materiels"];
//     const ma=repoMatMaritime.concat(repoMatChimique,repoMatRoutiere)
//     return ma;
//   }
//   componentWillMount(){
//     this.majState();
    
//   }
//   majState=()=>{
//     const alim=this.AllAlim();
//     const chim=this.AllChim();
//     const mat= this.AllMat();
    
//     this.setState({
//       produitsAlim:alim,
//       produitsChim:chim,
//       produitsMAt:mat,
//     });
//   }
//   ajouterAlim=()=>{
//     // creer un article
//     const newAlim={
//      id:this.state.produitsAlim.length+1,
//     libelle:"nouveau produit",
//     poids:4,
//     volume:5,
//     image:"https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=600", 
//     fraisRoutiere:100,
//     distance:1000,
//     fraisMaritime:90,
//     fraisAerienne:300,
//     autresFraisAlimentaire:5000,
//     } 
//     // ajouter bd
//     addProduitAlim(newAlim);
//     // mettre a jour le states
//    this.majState();
//   }

//   render() {
//     return (
//       <>

     
//       <div>
//       <div className="ftco-blocks-cover-1">
//       <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
//         <div className="container">
//           <div className="row align-items-center justify-content-center text-center">
//             <div className="col-md-7">
//               <h1 className="mb-3">Espace Produits</h1>
//               <p>Notre Banque de  Produits</p>
//               <p><NavLink to="#" className="btn btn-primary">plus d'infos </NavLink></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <h2 className='text-center'>Vos Produits Alimentaire</h2>
//       <hr/>
//       <div className='row mt-5'>
//           {
           
//             this.state.produitsAlim.map((ali)=>{
//               return <Alimentaire key={ali.id} info={ali} />
//             })

//           }
//         {
//           this.state.produitsAlim.lenght=== 0 && <p> La liste est vide</p>
//         }
      
//       </div>
//       <hr/> 
//     <h2 className='text-center'>Vos Produits Chimique</h2>
//       <hr/>
//       <div className='row mt-5'>
//           {
           
//             this.state.produitsChim.map((chi)=>{
//               return <Chimique key={chi.id} info={chi} />
//             })

//           }
//         {
//           this.state.produitsChim.lenght=== 0 && <p> La liste est vide</p>
//         }
      
//       </div>
//       <hr/> 
//     <h2 className='text-center'>Vos Produits Materiel</h2>
//       <hr/>
//       <div className='row mt-5'>
//           {
           
//             this.state.produitsMAt.map((mat)=>{
//               return <Materiel key={mat.id} info={mat} />
//             })

//           }
//         {
//           this.state.produitsMAt.lenght=== 0 && <p> La liste est vide</p>
//         }
      
//       </div>
//       <NouveauProduit/>

//       </div>
//       </>
//     )
//   }
// }
