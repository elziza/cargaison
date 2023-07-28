import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'


export default class NouveauProduit extends Component {
  state={
    libelle:"",
    poids:0,
    image:"", 
    volume:0, 
    typeProduit:"",
    typeMateriel:"",
    fraisRoutiere:0,
    fraisMaritime:0,
    fraisAerienne:0,
    degresTox:0,
    autresFraisAlimentaire:5000,
    autresFraisChimique:10000,
  }
  changePoids=(e)=>{
    this.setState({
     poids: e.target.value
    })
  }
  changeVolume=(e)=>{
    this.setState({
     volume: e.target.value
    })
   
  }
  changeImage=(e)=>{
    this.setState({
     libelle: e.target.value
    })
  }
  changeLibelle=(e)=>{
    this.setState({
     libelle: e.target.value
    })
  }
  changeTypeMateriel=(e)=>{
    this.setState({
     typeMateriel: e.target.value
    })
  }
  changeTypeProduit=(e)=>{
    this.setState({
        typeProduit:e.target.value
    })
  }
  SommeAPayer=(e)=>{
    this.changeVolume()
    e.preventDefault();
  }
  validerForm=(e)=>{  
    e.preventDefault();

  }
  render() {
    return (
   <>
       <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">voir cargaison</h1>
              <p>WeundeLou Mbaay Mbaay</p>
              <p><NavLink to="/cargaison" className="btn btn-primary">voir Les Cargaisons </NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <hr/>
      <div className='row'>
      <h1 className='text-center'>Formulaire </h1>
      <hr/>
        <form className='col-sm-6 offset-3 pt-5' action="" method=''  onSubmit={this.validerForm.bind(this)} >
        {/* select carg  */}
    <div className="form-group mt-3">
    <label>Type de Cargaison</label>
    <select  value={this.state.typeCarg} onChange={this.changeTypeCarg} className="form-control">
      <option value="">...</option>
      <option value="maritime">Maritime</option>
      <option value="aerienne"  >Aerienne</option>
      <option value="routiere">Routiere</option>
    </select>
  </div>
         {/* select produit  */}
  <div className="form-group mt-3">
    <label>Type de produit</label>
    <select  value={this.state.typeProduit} onChange={this.changeTypeProduit} className="form-control">
      <option value="">...</option>
      <option value="alimentaire">alimentaire</option>
      <option value="chimique"  >chimique</option>
      <option value="materiel">materiel</option>
    </select>
    </div>
  <div className="form-group   d-flex flex-row align-items-center justify-content-center">
    {/* libelle */}
      <div className="form-group m-2">
    <label>libelle</label>
    <input name='libelle'  value={this.state.libelle} onChange={this.changeLibelle} type="text" className="form-control" required /> 
      </div>
    
      {/*poids */}
    <div className="form-group m-2">
    <label>poids</label>
    <input name='poids'  value={this.state.poids} onChange={this.changePoids} type="number" className="form-control" required /> 
      </div>
      {/* volume */}
    <div className="form-group">
      <label>volume</label>
      <input name='volume' value={this.state.volume} onChange={this.changeVolume} type="number" className="form-control"  required/> 
    </div>
  </div>
  <div className="form-group  d-flex flex-row align-items-center justify-content-center">
    {/* frais Routiere */}
      <div className="form-group m-2">
    <label>Somme à Payer</label>
      <p >montant: {this.SommeAPayer} fcfa</p>
      </div>
    
  </div>
  {/* radio */}
  <div className="form-group d-flex flex-row align-items-center justify-content-center">
      <div className="form-check m-4">
          <input className="form-check-input" type="radio" value="fragile" checked={this.state.typeMateriel === 'fragile'}  onChange={this.changeTypeMateriel} />
          <label className="form-check-label"> fragile </label>
      </div>
      <div className="form-check">
          <input className="form-check-input" type="radio" value="incassable" checked={this.state.typeMateriel === 'incassable'} onChange={this.changeTypeMateriel} />
          <label className="form-check-label"> incassable </label>
      </div>
  </div>
  
  {/* image du produit */}
  <div className="form-group mt-3">
    <label>Image</label>
    <input name='image'  ref={this.state.image} onChange={this.changeImage} type="file" className="form-control" rows="3" required/>
  </div>
  {/* btn save */}
  <button className='btn btn-primary mt-5 mb-3 w-15' type='submit' >Ajouter</button>
</form>
      </div>
      </>
    )
  }
}

