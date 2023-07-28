import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import {  addCarg } from '../../services/BD'



// import {v4 as uuidv4} from 'uuid';


export default class NouvelleCargaison extends Component {
  state={
    image:"",
    dateDep:"",
    dateAr:"",
    lieuDep:"",
    lieuArr:"",
    typeCarg:"",
    numero:0,
    volume:0,
    distance:0,
  }
  
  changeDateDep=(e)=>{ 
        this.setState({
            dateDep:e.target.value
        })  
        return this.state.dateDep
     }
  changeDateAr=(e)=>{
    this.setState({
     dateAr: e.target.value
    })
    return this.state.dateAr
  }
  changeImage=(e)=>{
    this.setState({
     image: e.target.value
    })
    return this.state.image
  }
  changeLieuDep=(e)=>{
        this.setState({
        lieuDep:e.target.value,
    })
    return this.state.lieuDep
  }
  changeLieuArr=(e)=>{
    this.setState({
        lieuArr:e.target.value
    })
    return this.state.lieuArr
  }
  changeNumero=(e)=>{
    this.setState({
        numero:e.target.value
    })
  }
  changeVolume=(e)=>{
    this.setState({
        volume:e.target.value
    })
  }
  changeDistance=(e)=>{
    this.setState({
        distance:e.target.value
    })
  }
  changeTypeCarg=(e)=>{
    if(e.target.value==="maritime"){
        this.setState({
            typeCarg:e.target.value
        })
        return this.state.typeCarg
    }else if(e.target.value==="aerienne"){
        this.setState({
            typeCarg:e.target.value
        })
        return this.state.typeCarg
    }else{
        this.setState({
            typeCarg:e.target.value
        })
        return this.state.typeCarg
    }
  }
  addRequete=()=>{
    
        const numero =this.state.numero 
        const image=this.state.image
        const dateDep=this.state.dateDep
        const dateAr=this.state.dateAr
        const lieuDep=this.state.lieuDep
        const lieuArr=this.state.lieuArr
        const typeCarg=this.state.typeCarg
        const distance=this.state.distance

        addCarg(numero,image,dateDep,dateAr,lieuArr,lieuDep,typeCarg,distance)  
  
       
  //       fetch("http://localhost:3000/cargaison",
  //       {
  //         method: "POST",
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify(addCarg(numero,image,dateDep,dateAr,lieuArr,lieuDep,typeCarg))
  //       }
  //       )
  //       // .then(res=> (carg))
   }
  validerForm=(e)=>{   
    e.preventDefault();
     this.addRequete();
  }
  render() {
    return (
    <>
     <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">Ajout Cargaison</h1>
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
        <form className='col-sm-6 offset-3 pt-5' action="/cargaison" method=''  onSubmit={this.validerForm.bind} >
        {/* select  */}
    <div className="form-group mt-3">
    <label>Type de Cargaison</label>
    <select  value={this.state.typeCarg} onChange={this.changeTypeCarg} className="form-control">
      <option value="">...</option>
      <option value="maritime">Maritime</option>
      <option value="aerienne"  >Aerienne</option>
      <option value="routiere">Routiere</option>
    </select>
  </div>
  <div className="form-group mt-3  d-flex flex-row align-items-center justify-content-center">
    {/* numero */}
    <div className="form-group ">
      <label>Numero Cargaison</label>
      <input name='numero'  value={this.state.numero} onChange={this.changeNumero} type="number" className="form-control" required /> 
    </div>
    {/* volume */}
    {/* <div className="form-group ">
      <label>volume</label>
      <input name='volume'  value={this.state.volume} onChange={this.changeVolume} type="number" className="form-control" required /> 
    </div> */}
    {/* distance */}
    <div className="form-group ">
      <label>distance </label>
      <input name='distance'  value={this.state.distance} onChange={this.changeDistance} type="number" className="form-control" required /> 
    </div>
  </div>
  <div className="form-group mt-3  d-flex flex-row align-items-center justify-content-center">
    {/* date de depart */}
    <div className="form-group">
      <label>Date de depart</label>
      <input name='dateDep'  value={this.state.dateDep} onChange={this.changeDateDep} type="date" className="form-control" required /> 
    </div>
    {/* date d'arrivée */}
    <div className="form-group ">
      <label>Date d'arrivée</label>
      <input name='dateAr' value={this.state.dateAr} onChange={this.changeDateAr} type="date" className="form-control"  required/> 
    </div>
  </div>
    <div className="form-group mt-3  d-flex flex-column align-items-center justify-content-center">
    {/* Lieu de depart */}
    <div className="form-group ">
      <label>Lieu de Depart</label>
      <input  name='lieuDep'  value={this.state.lieuDep} onChange={this.changeLieuDep} type="text" className="form-control" placeholder='dakar' required /> 
    </div>
    {/* Lieu D'arrivée */}
    <div className="form-group ">
      <label>Lieu d'arrivée</label>
      <input name='lieuArr' value={this.state.lieuArr} onChange={this.changeLieuArr} type="text" className="form-control" placeholder='st louis' required/> 
    </div>
  </div>
 
  {/* image */}
  <div className="form-group ">
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

