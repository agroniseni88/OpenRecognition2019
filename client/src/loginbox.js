import React from 'react';
import {Link} from "react-router-dom"

import './App.css';



class LoginBox extends React.Component{
    constructor(props){
      super(props);
      this.state={
        new_username: "",
        new_password: ""
      };
  
    }
   
        submitlogin(e){
          e.preventDefault();
          const { history } = this.props;
          fetch(`http://localhost:5000/api/profile/${this.state.new_username}/${this.state.new_password}`,
      { method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        if (res.status === 200) {
          res.json().then(data => {
            const profiles = data;
            localStorage.setItem("new_username", `${profiles[0].new_username}`);
            // history.push(`/profile/${profiles[0].id}`);
            // history.push(`/profile/${profiles[0].login}`);
          });
        } else {
          this.setState({
            // [e.target.name] : e.target.value
            });
            console.log(this.state);
        }
      })
      .catch(err => console.log("Error:", err));
      };
            

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