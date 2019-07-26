import React from 'react';
import './App.css';



class LoginBox extends React.Component{
    constructor(props){
      super(props);
      this.state={};
  
    }
    
    submitlogin(e){

            this.setState({
            [e.target.name] : e.target.value
            });
            console.log(this.state);
        };
       
        
  
    render(){
      return (
      <div  className="inner-container" >
         <div className="header">
              <label className="login" >Log in</label>
            </div> 
          
          <div className="box">
          
          <div className="input-group">
  
            <label htmlFor="username">Username</label>
            <input type="text" className="login-input" name="username" placeholder="Username"></input>
          
          </div> 
  
          <div className="input-group">
  
            <label htmlFor="password">Password</label>
            <input type="password"className="login-input" name="password" placeholder="Password"></input>
          
          </div> 
  
          <button type="button" onClick={this.submitlogin.bind(this)} className="login-btn">Log in</button>
            
          </div> 
          
      
      
      
      </div>
  
  
  
        )
    }
  
  }
  
  export default LoginBox