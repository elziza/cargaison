
import React, { Component } from 'react'
import { login } from '../services/BD'

export default class Login extends Component {
    state={
      email:"",
      password:""
    }
    email=(e)=>{
      this.setState({
          email:e.target.value
  
        })
        
    }
    pwd=(e)=>{
      this.setState({
          password:e.target.value
      })
     
    }
   
    seConnecter=(e)=>{
      if(login()[0]["password"]=== e.target.value && login()[0]["email"]=== e.target.value){
        e.preventDefault();
       this.email();
       this.pwd();
      }else{
        alert("c'est pas le bon identifiant")
        window.location.reload()
      }
    
      
      // console.log("bebe")
    }
  render() {
    return (
        <form  method="" action='/cargaison'  onSubmit={this.seConnecter.bind}>
        <div className="container">
          <h1>Login</h1>
          <p>Identifiez-Vous ci-après</p>
          <hr/>
      
          <label htmlFor="email"><b>Email</b></label>
          <input value={this.state.email} onChange={this.email} type="text" placeholder="Enter Email" name="email" id="email" required/>
      
          <label htmlFor="pwd"><b>Password</b></label>
          <input value={this.state.password} onChange={this.pwd} type="password" placeholder="Enter Password" name="pwd" id="pwd" required/>
      
          <label htmlFor="pwd-repeat"><b>Repeat Password</b></label>
          <input value={this.state.password} onChange={this.pwd} type="password" placeholder="Repeat Password" name="pwd-repeat" id="pwd-repeat" required/>
          <hr/>
      
          <button type="submit" className="registerbtn btn btn-success ">Se Conncecter</button>
        </div>
      
      </form>

    )
  }
}
