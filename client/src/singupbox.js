import React from 'react';
import './App.css';

class SignUp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        first_name: "",
        last_name: "",
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
      const { first_name, last_name, email, username, password } = this.state;
      fetch('http://localhost:5000/api/profile/add', {
         method: 'POST',
         body: JSON.stringify({
         first_name, 
         last_name,
         email,
         username,
         password
         }),
      headers: { 'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'}
      })
     .then( res => res.json())
     .then( res => console.log(res)); 
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
      
                    <label htmlFor="first_name">Firstname</label>
                    <input 
                        type="text" 
                        className="login-input"
                        name="first_name" 
                        placeholder="firstname"
                        value={this.state.first_name}
                        onChange={e => this.Change(e)}/>
              
              </div> 
              <div className="input-group">
      
                    <label htmlFor="last_name">Lastname</label>
                    <input 
                        type="text" 
                        className="login-input" 
                        name="last_name"
                        placeholder="lastname"
                        value={this.state.last_name}
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
                  type="submit" className="login-btn"
                  onClick={(e)=>this.submitregister(e)}
                   >Sign up</button>
            
          </div> 
      
      
      
           
  
  
  
        )
    }
  
  }

  export default SignUp 