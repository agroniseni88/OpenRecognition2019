import React from 'react';
import './App.css';

class SignUp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        firstname: "ddfdff",
        lastname: "",
        email: "",
        username: "",
        password: ""

      };
    
    
    }
    Change= e =>{
      this.setState({
        [e.target.name]: e.target.value,
              });
      console.log(this);
    }
    
    submitregister= (e )=>{
      e.preventDefault();
      fetch("http://localhost:5000/api/profile/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
            
    this.setState({
      firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""

    })
        console.log(this);
  
    }
    
    render(){
      return (
      <div  className="inner-container" >
            <div className="image">

            </div>


            <div className="box-header">
              Sign up
            </div>        
          <div className="box">
          
              <div className="input-group">
      
                    <label htmlFor="firstname">Firstname</label>
                    <input 
                        type="text" 
                        className="login-input"
                        name="firstname" 
                        placeholder="firstname"
                        value={this.state.firstName}
                        onChange={e => this.Change(e)}/>
              
              </div> 
              <div className="input-group">
      
                    <label htmlFor="lastname">Lastname</label>
                    <input 
                        type="text" 
                        className="login-input" 
                        name="lastname"
                        placeholder="lastname"
                        value={this.state.lastname}
                        onChange={e => this.Change(e)}/>

              </div> 
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                    className="login-input" 
                    name="email" 
                    placeholder="email"
                    value={this.state.email}
                    onChange={e => this.Change(e)}/>
                
          </div> 
          <div className="input-group">
      
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        className="login-input" 
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={e => this.Change(e)}/>

              </div>
           
          <div className="input-group">
  
                <label htmlFor="password">password</label>
                <input 
                    type="password"
                    className="login-input" 
                    name="password" 
                    placeholder="password"
                    value={this.state.password}
                    onChange={e => this.Change(e)}/>
              
              </div> 
      
              <button 
                  type="button" className="login-btn"
                  onClick={(e)=>this.submitregister(e)}
                   >Sign up</button>
            
          </div> 
      
      
      
           
  
  
  
        )
    }
  
  }

  export default SignUp 