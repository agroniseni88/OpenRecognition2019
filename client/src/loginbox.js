import React from 'react';



import './App.css';



class LoginBox extends React.Component{
    constructor(props){
      super(props);
      this.state={
        username: "",
        password: ""
      };
  
    }
   
        submitlogin(e){
          e.preventDefault();
          
          const { username, password } = this.state;
      fetch('http://localhost:5000/api/profile/username/password', {
         method: 'GET',
         Window: JSON.stringify({
         
         username,
         password
         }
         ),
      headers: { 'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'}
     
      })
      
     .then( res => res.json())
     .then( res => console.log(res)); 
     }  
    
            

            // get and fetch data from vbachend post https://googlechrome.github.io/samples/fetch-api/fetch-post.html
      
       
        
  
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