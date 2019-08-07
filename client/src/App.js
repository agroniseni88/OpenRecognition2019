import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './loginbox';
import SignUp from './singupbox';
import './App.css';
class App extends React.Component {
  
constructor(props){
  super(props);
  this.state={
    isLoginOpen: true, 
    isRegisterOpen: false,
    connection: {}
  };
  }
  showLoginBox(){
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }
  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/connection/5d39aefa378322104c459c0c")
        .then(data => data.json())
        .then(data2=>{
          this.setState({
            connection:data2[0],
          })
          
          });
        }
  render(){
    return(
      
      
      
    <div className="root-container">
       
          <div className="top-text" >
            {/* <h1>OPEN KNOWLEDGE is place where you can be more trustful!</h1> */}
            <input  placeholder="Search friend"  className="search-border" name="text" ></input>
        
          </div>

          <div>
      
             {this.state.connection._id}
             {console.log("current connection", this.state.connection)}
           
      
        </div>
         
            <div  className="box-controller" >
              <div  className="FormTitle" >
              
              </div>
              <div className="controller " onClick={this.showLoginBox.bind(this)}>
                Log in
                
              </div>
              <div className="controller" onClick={this.showRegisterBox.bind(this)} >
                Sign up
              </div>
            </div>
            <div className="box-login">
              {this.state.isLoginOpen &&   <LoginBox exact path="/loginbox" component={LoginBox} />}
                            
            </div>
            <div className="box-signup">
            {this.state.isRegisterOpen &&   <SignUp />}
            </div>
            
            
    </div>
     
    )}


  
   
        
  
}
export default App
ReactDOM.render(<App />, document.getElementById('root'));
