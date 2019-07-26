import React from 'react';
import './App.css';

class SignUp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        firstname: "ddfdff",
        lastname: "",
        email: "",
        occupation: "",
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
    this.setState({
      firstname: "",
        lastname: "",
        email: "",
        occupation: "",
        password: ""

    })
        console.log(this);
  
    }
    
    render(){
      return (
      <div  className="inner-container" >
            <div className="image">

            </div>


            <div className="box header">
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
      
                <label htmlFor="lastname">Occupation</label>
                <input 
                    type="text" 
                    className="login-input"
                    name="occupation" 
                    placeholder="occupation"
                    value={this.state.occupation}
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
                  type="button" 
                  onClick={(e)=>this.submitregister(e)}
                   className="login-btn">Sign up</button>
            
          </div> 
      
      
      
           
  
  
  
        )
    }
  
  }

  export default SignUp 